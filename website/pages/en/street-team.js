/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class StreetTeam extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div style={{paddingLeft: "10px", paddingRight: "10px"}} className="post">
            <header className="postHeader">
              <h2>Join the RadGrad Street Team!</h2>
            </header>
            <p style={{maxWidth: "100em"}}>Are you an undergraduate in ICS or Computer Engineering?  Are you intrigued by the potential for RadGrad to improve the undergraduate experience?  Do you want to help change RadGrad for the better? If so, please consider joining the RadGrad Street Team!</p>

            <p style={{maxWidth: "100em"}}>Currently, over 200 ICS and Computer Engineering students are registered in RadGrad. During the first few weeks of the Fall semester, we will register all students enrolled in ICS 314 and ICS 211, which will add over 100 more. </p>

            <p style={{maxWidth: "100em"}}>To make RadGrad as useful as possible, we are looking for students to help us with the following: </p>

            <p style={{maxWidth: "100em"}}><b>Help register remaining interested ICS and CE students.</b> Those students who took ICS 314 and ICS 211 prior to Spring, 2018 need a chance to get registered. This involves a 30 minute "onboarding session." We would ideally like this event to be sponsored and promoted by a student group such as ACM Manoa.</p>

            <p style={{maxWidth: "100em"}}><b>Provide RadGrad course and opportunity reviews.</b> RadGrad has the potential to be an authoritative source of high quality, student-authored reviews of courses and opportunities. You can write a review for any course or opportunity you have completed.  Please help future generations of students learn from your experiences.</p>

            <p style={{maxWidth: "100em"}}><b>Improve RadGrad's list of interests, career goals, and oppportunities.</b> We've already had excellent suggestions for new interests from students. We would love your help in making sure RadGrad has the most up to date information. We also want to hear your suggestions for ways to improve the presentation of current interests, career goals, and opportunities. </p>

            <p style={{maxWidth: "100em"}}><b>Improve the game mechanics.</b> Some of RadGrad's features are inspired by "serious games", including the ICE point system and the six Levels (and corresponding laptop stickers). While initial feedback about these features has been positive, we want to make them even better. What changes might we make to help students maximize their undergraduate degree experience?</p>

            <p style={{maxWidth: "100em"}}><b>Improve community formation.</b> One goal of RadGrad is to help students form "communities of practice", or informal groups based on a shared interest and desire to attain proficiency with a technology or disciplinary area. How can we make RadGrad better at helping students to find and form communities? </p>

            <p style={{maxWidth: "100em"}}><b>Improve support for women and underrepresented minorities in computer science.</b> There is evidence that the mechanisms implemented by RadGrad might help improve diversity in computer science degree programs. Is this true in reality? How could we change RadGrad to make it more useful to women and underrepresented minorities?</p>

            <p style={{maxWidth: "100em"}}><b>Improve (i.e. hack) RadGrad itself.</b> If there's a feature you'd like to see in RadGrad, you might just want to go ahead and implement it yourself.  We can offer course credits, ICE points, encouragement, and debugging advice if you want to get involved with the RadGrad project as a developer.  It will look great on your professional portfolio. </p>

            <h2>I'm interested! What's next?</h2>

            <p style={{maxWidth: "100em"}}>Contact Philip Johnson (johnson@hawaii.edu) if you would like to talk further. Depending upon your desired level of involvement, it might be possible to get ICS 499 (Independent Study) credits for participating. </p>



          </div>
        </Container>
      </div>
    );
  }
}

module.exports = StreetTeam;
