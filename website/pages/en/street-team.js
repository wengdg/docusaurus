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

            <p style={{maxWidth: "100em"}}><b>Be an exemplary RadGrad user.</b> We are looking for street team members from first years to seniors, but regardless of your grade level, you need to actually use RadGrad. For example: (1) Make sure your profile (interests and career goals) are up to date; (2) Fill out your degree plan so that it accurately reflects all the computer science courses you plan to take in order to graduate; (3) Create a degree plan that will get you to 100 points in all three ICE categories by the time you graduate; (4) Engage in opportunities, and submit them for verification; and (5) Try to achieve a new Level each semester, and display your current Level laptop sticker. <br/> We are confident that the more you work with RadGrad, the easier it will be to identify ways to improve it. </p>

            <p style={{maxWidth: "100em"}}><b>Help us to register remaining interested ICS and CE students.</b> Those students who took ICS 314 and ICS 211 prior to Spring, 2018 need a chance to get registered. This involves a 30 minute "onboarding session." We would ideally like this event to be sponsored and promoted by a student group such as ACM Manoa.</p>

            <p style={{maxWidth: "100em"}}><b>Write and submit RadGrad course and opportunity reviews.</b> RadGrad has the potential to be an authoritative source of high quality, student-authored reviews of courses and opportunities. You can write a review for any course or opportunity you have completed.  Please help future generations of students learn from your experiences.</p>

            <p style={{maxWidth: "100em"}}><b>Suggest new interests, career goals, and oppportunities.</b> We've already had excellent suggestions for new interests from students. We would love your help in making sure RadGrad is up to date and relevant. We also want to improve the presentation of existing interests, career goals, and opportunities. </p>

            <p style={{maxWidth: "100em"}}><b>Improve the game mechanics.</b> Some of RadGrad's features are inspired by "serious games", including the ICE point system and the six Levels (and their corresponding laptop stickers). While initial feedback about these features has been positive, we want to make them even better. What changes might we make in order to help students maximize their undergraduate degree experience?</p>

            <p style={{maxWidth: "100em"}}><b>Improve community formation.</b> One goal of RadGrad is to help students form "communities of practice", i.e. informal groups based on a shared interest who desire to attain proficiency with a technology or disciplinary area. How can we make RadGrad better at helping students to find and form communities? </p>

            <p style={{maxWidth: "100em"}}><b>Improve support for women and underrepresented minorities in computer science.</b> There is evidence from the literature that RadGrad can help improve diversity in computer science degree programs. Is this true in reality? How can we change RadGrad to make it more useful to women and underrepresented minorities?</p>

            <p style={{maxWidth: "100em"}}><b>Improve (i.e. hack) RadGrad itself.</b> Is there a feature you'd like to see implemented in RadGrad?  We can offer course credits, mentoring, encouragement, and debugging advice if you want to get involved with the RadGrad project as a developer.  It will look great on your professional portfolio. </p>

            <h2>I'm interested! What's next?</h2>

            <p style={{maxWidth: "100em"}}>Contact Philip Johnson (johnson@hawaii.edu) if you would like to help out. We want the RadGrad Street Team to comprise students at different levels and with different backgrounds, so don't be inhibited if you don't consider yourself to be a "traditional" computer science student. </p>

            <p style={{maxWidth: "100em"}}>If you're interested, but not yet registered in RadGrad, let Philip know. We can arrange a special onboarding session in late June or early July for you. </p>

            <p style={{maxWidth: "100em"}}>Your primary responsibility as a RadGrad Street Team member will be to attend a one hour meeting approximately once a month, starting in July or August.  There will always be food. We will use Doodle to try to find a time where everyone can attend. At each meeting, RadGrad administrators will bring the Street Team up to date and lead discussions on issues of concern. For some meetings, we might request a small amount of advance preparation (for example, "Please review the MentorSpace page and come prepared to offer suggestions on how to improve it.")</p>

            <p style={{maxWidth: "100em"}}>If you're interested in doing more than coming to a monthly meeting, it might be possible to get ICS 499 (Independent Study) credits. Discuss with Philip.</p>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = StreetTeam;
