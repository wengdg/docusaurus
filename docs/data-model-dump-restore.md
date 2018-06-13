---
id: data-model-dump-restore
title: Database Dump-Restore
sidebar_label: Database Dump-Restore
---

RadGrad implements a custom mechanism for database dumping (i.e. outputting the contents of the MongoDB database in a file in JSON format) and restoring a dumped database (i.e. loading the contents of the dump file).  We call this capability database dump-restore.

We are aware that MongoDB provides a built-in facility through [MongoDB Tools](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/) to dump the contents of a MongoDB database in a manner that allows reloading. We chose to develop our own custom method because we wanted a way to define database fixture files in a human-readable form, and because we were worried about database integrity problems with MongoDB as our schemas evolved and so we wanted a way to easily edit database fixture files to repair integrity violations by hand if they happened to occur. 

## Dump

As noted previously, in RadGrad, all collections are managed through a set of Javascript classes.  The classes that wrap each collection inherit from the class BaseCollection, which defines a method called `dumpOne()` whose default implementation throws an error:

```js
 /**
   * Returns an object representing the definition of docID in a format appropriate to the restoreOne function.
   * Must be overridden by each collection.
   * @param docID A docID from this collection.
   * @returns { Object } An object representing this document.
   */
  dumpOne(docID) { // eslint-disable-line
    throw new Meteor.Error(`Default dumpOne method invoked by collection ${this._collectionName}`);
  }
``` 

Each collection class must define a dumpOne method, which is generates an object representing the docID that it was passed. For example, here is the `dumpOne()` method for the CareerGoal collection:

```js
 /**
   * Returns an object representing the CareerGoal docID in a format acceptable to define().
   * @param docID The docID of a CareerGoal.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const name = doc.name;
    const slug = Slugs.getNameFromID(doc.slugID);
    const description = doc.description;
    const interests = _.map(doc.interestIDs, interestID => Interests.findSlugByID(interestID));
    return { name, slug, interests, description };
  }
```

You can see that this method returns an object with four fields: name, slug, interests, and description. Name, slug, and description are Strings, and Interests is an array of Strings (the Slugs corresponding to the InterestIDs in the document).

Now the question is, why is that the appropriate object to return from dumpOne?  To understand the answer, you need to also know that each Javascript class also defines a method called `define()` which accepts an object containing fields representing the initial values for a document in the underlying MongoDB collection. This is the standard way in RadGrad to create MongoDB documents in the data model.  Here, for example, is the define() method for the CareerGoal collection:

```js
 /**
   * Defines a new CareerGoal with its name, slug, and description.
   * @example
   * CareerGoals.define({ name: 'Database Administrator',
   *                      slug: 'database-administrator',
   *                      description: 'Wrangler of SQL.',
   *                      interests: ['application-development', 'software-engineering', 'databases'],
   *                    });
   * @param { Object } description Object with keys name, slug, description, interests.
   * Slug must be globally unique and previously undefined.
   * Interests is a (possibly empty) array of defined interest slugs or interestIDs.
   * Syllabus is optional. If supplied, should be a URL.
   * @throws { Meteor.Error } If the slug already exists.
   * @returns The newly created docID.
   */
  define({ name, slug, description, interests }) {
    // Get Interests, throw error if any of them are not found.
    const interestIDs = Interests.getIDs(interests);
    // Get SlugID, throw error if found.
    const slugID = Slugs.define({ name: slug, entityName: this.getType() });
    const docID = this._collection.insert({ name, slugID, description, interestIDs });
    // Connect the Slug to this Interest
    Slugs.updateEntityID(slugID, docID);
    return docID;
  }
```

It's not necessary to understand the implementation of this define() method at this point: what is important to see is that the object returned by the dumpOne() method of the CareerGoalCollection class is in precisely the correct format required by the define() method of that same class in order to create a new CareerGoal document.

This relationship between `dumpOne()` and `define()` is the central idea behind RadGrad's dump mechanism. There is more code to implement the mechanics of dumping:  iterating through each docID in each collection,writing out the results as a json file, determining where to write the file, and so forth. But if you understand and can adhere to this relationship between `dumpOne` and `define()`, then you can create new classes and manage other ones successfully. 

Note that whenever a change is made the parameters to a `define()` method, you must make sure to update the `dumpOne()` method as well!  

## Restore

"Restore" refers to the process of initializing the MongoDB database from scratch with the contents of a file created through the "Dump" mechanism. 

The  process of database restoration involves the following sequence:

First, the developer specifies a field called "databaseRestoreFileName" in the JSON settings file passed to Meteor. For example:

```js
"databaseRestoreFileName": "database/snapshot/2017-08-02-14-12-04.json",
``` 

The value of this field is a path within the `private` directory of the RadGrad application. Here's [2017-08-14-12-04.json](https://github.com/radgrad/radgrad/blob/master/app/private/database/snapshot/2017-08-02-14-12-04.json).

If and only if the database is empty when the system comes up, then the contents of this file will be used to initialize the database.    See the loadDatabase() function in [initialize-db.js](https://github.com/radgrad/radgrad/blob/master/app/imports/startup/server/initialize-db.js) to see the process.

To ensure that the database being loaded is consistent with the system's data model, the loading process requires that two constraints are met:

  1. The set of collections expected in the RadGrad application are all present in the database json file.
  2. There are no collections present in the database json file that are not expected by the application. 
  
In other words, the database json file contains exactly the set of collections required by RadGrad.

There are other ways the loading process can fail.  As noted elsewhere, entities in the data model can link to each other. For example, a StudentProfile instance can contain a list of docIDs of the Interests associated with the student.  There can be no forward referencing in RadGrad, so any Interest associated with a StudentProfile must be defined prior to defining the profile instance. 

