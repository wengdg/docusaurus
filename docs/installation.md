---
id: Installation
title: Installation
sidebar_label: Installation
---

First, download and install [Meteor](https://www.meteor.com/). 

Second, download the RadGrad source code from [https://github.com/radgrad/radgrad](https://github.com/radgrad/radgrad).

Next, cd to the radgrad/app/ directory and invoke npm:

```
app$ npm install
```

This will download and install the third-party libraries required to run this system.

To make sure the database starts from an empty state, run:

```
app$ meteor reset
```

To run the system, invoke this command:

```
app$ meteor npm run start
```

This will invoke the "start" script in [package.json](https://github.com/radgrad/radgrad/blob/master/app/package.json), which initializes the database (if empty) with sample data.  Go to [http://localhost:3000](http://localhost:3000) to confirm that the system is running:


<img src="../img/home-page.png" width="100%">
