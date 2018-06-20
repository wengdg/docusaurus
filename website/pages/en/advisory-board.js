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

class AdvisoryBoard extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div style={{paddingLeft: "10px", paddingRight: "10px"}} className="post">
            <header className="postHeader">
              <h2>RadGrad Advisory Board</h2>
            </header>
            <h3>Executive Summary</h3>
            <p style={{maxWidth: "100em"}}>We propose two primary research goals for RadGrad during Academic Year 2018: (1) Assess the engagement of undergraduate students with the platform after onboarding, and (2) Assess the ability of RadGrad to support retention of women and underrepresented minorities.  The charge for the RadGrad Advisory Board is to support the project, at this time by providing review and feedback on these plans.</p>

            <h3>Brief history</h3>

            <p style={{maxWidth: "100em"}}>The RadGrad Project began in 2015. We spent the first year working with students: conducting focus groups to assess their needs, and developing whiteboard and HTML mockups with them.  We spent the second year on implementation, beta testing, and pilot studies with small numbers of students. We spent last year on initial deployment and learning how to onboard 30-50 students at a time. We currently have over 200 registered undergraduate ICS and Computer Engineering student users.  From now on, each student taking ICS 211 will be onboarded into RadGrad during the first few weeks of the semester during a lab period. In addition, at least one "walk up" onboarding session will be provided each semester for any remaining undergraduates wishing to use RadGrad. We believe this approach will result in at least 80% of ICS students having at least an initial exposure to RadGrad.</p>

            <p style={{maxWidth: "100em"}}>At this point, we feel confident in our ability to "onboard"---to register students and provide them with an introduction to the system. Our next challenge is to learn how to <em>engage</em> students so that they utilize the system in a way that significantly improves their undergraduate degree experience and post-graduation success. In addition, we want to explore the possibility that RadGrad can help improve retention of women and underrepresented minorities in computer science.</p>

            <h3>Defining and assessing engagement</h3>

            <p style={{maxWidth: "100em"}}>We are instrumenting the RadGrad environment so that we can track each user's use of the system and abstract low-level interactions into the following higher level behaviors: <ol><li>Change outlook: a change in interests, career goals, or degree plan</li><li>Exploration: viewing entries in the career goal, interest, course, user, and/or opportunity explorer</li><li> Planning: changes to the courses and/or opportunities in the Degree Planner</li><li>Verification: submission of completed opportunities </li><li>Reviewing: submission of a course or opportunity review</li><li>Mentorship: visits and interaction with the MentorSpace area</li><li> Leveling Up: achieving the next level</li><li>Complete Plan Achieved: planning at least 100 points in all three ICE categories</li></ol> The instrumentation will result in a timeline for each student, representing when each student uses RadGrad and which of the above behaviors were exhibited while they used it.</p>

            <p style={{maxWidth: "100em"}}>We propose the following operational definition for an "engaged" user of RadGrad: <em>A student is an engaged user of RadGrad for a given semester if they exhibit at least 4 out of the 8 behaviors listed above.</em> </p>

            <p style={{maxWidth: "100em"}}></p>

            <p style={{maxWidth: "100em"}}></p>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = AdvisoryBoard;
