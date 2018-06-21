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
        <Container className="mainContainer documentContainer">
          <div style={{paddingLeft: "10px", paddingRight: "10px"}} className="post">
            <header className="postHeader">
              <h2 style={{margin: "0"}}>RadGrad Advisory Board</h2>
            </header>
            <h3>Executive Summary</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>The goal of the RadGrad Project is to dramatically improve the undergraduate computer science degree experience. RadGrad will provide students with a better understanding of the diversity of opportunities available in computer science along with access to individualized learning plans and communities of practice in disciplinary areas of interest. Through RadGrad, students will have a more successful undergraduate experience leading to better post-graduation opportunities.</p>

            <p style={{maxWidth: "100em"}}>The goal of the RadGrad Advisory Board is to provide review and feedback on the activities of the RadGrad Development Team in order to ensure a good fit with the project's overall goal.</p>

            <p style={{maxWidth: "100em"}}>Our major activities for Academic Year 2018 are: (1) Implement a RadGrad Street Team and monthly newsletter to facilitate development of engaged users; (2) Implement instrumentation to assess student engagement with RadGrad: (3) Gather evidence to assess whether students believe RadGrad has a positive impact on their undergraduate experience; (4) Assess the ability of RadGrad to support retention of women and/or underrepresented minorities. </p>

            <h3>Brief history</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>The RadGrad Project began in 2015. We spent the first year working with students: conducting focus groups to assess their needs, and developing whiteboard and HTML mockups with them.  We spent the second year on implementation, beta testing, and pilot studies with small numbers of students. We spent last year on initial deployment and learning how to register (i.e. "onboard") 30-50 students at a time. We currently have over 200 registered undergraduate ICS and Computer Engineering student users.  From now on, each student taking ICS 211 will be onboarded into RadGrad during the first few weeks of the semester during a lab period. In addition, at least one "walk up" onboarding session will be provided each semester for any remaining undergraduates wishing to use RadGrad. We believe this approach will result in at least 80% of ICS students having at least this initial exposure to RadGrad.</p>

            <p style={{maxWidth: "100em"}}>At this point, we feel confident in our ability to register students and provide them with a short introduction to the system. Our next challenge is to learn how to help students become <em>engaged</em> users, so that they utilize the system in a way that significantly improves their undergraduate degree experience and post-graduation success. In addition, we want to explore the possibility that RadGrad can help improve retention of women and/or underrepresented minorities in computer science.</p>

            <h3>Facilitating engagement</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>During this academic year, we will implement two mechanisms to facilitate engagement with RadGrad: the Street Team and the RadGrad Email Updates.</p>

            <p style={{maxWidth: "100em"}}><em>RadGrad Street Team.</em> The RadGrad Street Team is a volunteer student group that we will organize and lead through monthly meetings. It will have the following functions: (1) provide feedback to us on RadGrad from a student perspective, including things it does well and ways in which it can be improved, (2) be "exemplary" RadGrad student users, attempting to utilize all of its features; and (3) provide outreach into the student community so that as many students as possible are aware of RadGrad and its capabilities.  For more details, please see the <a href="street-team.html">RadGrad Street Team announcement</a>.</p>

            <p style={{maxWidth: "100em"}}><em>RadGrad Email Updates.</em> Approximately once a month, we will generate an email to each RadGrad student user.  The email will provide information about newly created interests, career goals, and opportunities, as well as information about opportunities that might be of interest to the user based upon their currently specified interests. Finally, it will review what actions the user will need to take to achieve the next Level in RadGrad.</p>

            <h3>Defining engagement through RadGrad Behaviors</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>"Engagement" is a nebulous term. For this project, we want to provide a precise, operational definition. To accomplish this, we are instrumenting the RadGrad environment so that we can track each user's use of the system and abstract low-level interactions into one or more of the following eight high level RadGrad Behaviors: <ol><li>Change outlook: a change in interests, career goals, or degree plan</li><li>Exploration: viewing entries in the career goal, interest, course, user, and/or opportunity explorer</li><li> Planning: changes to the courses and/or opportunities in the Degree Planner</li><li>Verification: submission of completed opportunities </li><li>Reviewing: submission of a course or opportunity review</li><li>Mentorship: visits and interaction with the MentorSpace area</li><li> Leveling Up: achieving the next level</li><li>Complete Plan Achieved: planning at least 100 points in all three ICE (Innovation, Competency, Experience) categories</li></ol> </p>

            <p style={{maxWidth: "100em", padding: "0"}}>We propose the following operational definition for an "engaged" user of RadGrad: <em>A student is an engaged user of RadGrad during a given semester if they exhibit at least 4 out of the 8 RadGrad Behaviors.</em> </p>

            <p style={{maxWidth: "100em"}}>We view engagement as a necessary but not sufficient condition for achieving the overall project goal. In other words, if students do not engage with RadGrad, then the system is unlikely to have a significant impact on their undergraduate degree experience.  However, engagement with RadGrad is not by itself sufficient evidence of an improved undergraduate experience. The next section addresses this issue.</p>

            <h3>Assessing RadGrad's impact on the undergraduate experience</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>At the end of the Spring, 2018 semester, we will conduct an experiment in which we will ask students to fill out a questionnaire regarding their undergraduate experience. We will draw our sample of students from several groups: (1) Computer science students who were "engaged" users of RadGrad during Fall 2018 and/or Spring 2019; (2) Computer science students who were registered in RadGrad, but not engaged users during either Fall 2018 or Spring 2019, and (3) Computer science students who were not registered in RadGrad for either semester. We will also attempt to ensure that each of these groups contain students who are women and/or underrepresented minorities. The questionnaire will ask students about their current satisfaction with their undergraduate degree experience, as well as (for registered users) the extent to which RadGrad was useful to them in discovering new interest areas, career goals, and extramural opportunities. For registered students who are graduating, we will ask them whether they believe RadGrad has helped them become better prepared for whatever they are choosing to do after graduation. For unregistered students, we will ask them what factors prevented them from registering with RadGrad.</p>


            <p style={{maxWidth: "100em"}}>The results of the questionnaire will provide evidence regarding the causal impact of RadGrad on the undergraduate degree experience. We hypothesize that engaged RadGrad users will be more satisfied with their undergraduate degree experience than either of the other two groups, and that they will have discovered new interests, career goals, and extramural opportunities through the system.</p>

            <h3>Attracting and retaining women and/or underrepresented minorities</h3>

            <p style={{maxWidth: "100em", padding: "0"}}>There is evidence from the research literature that (a) Individualized Learning Plans (ILP) and (b) Communities of Practice (CoP) can help attract and retain women and/or underrepresented minorities in computer science degree programs.  Both ILP and CoP are supported in RadGrad. Therefore, it is possible that RadGrad can have a positive impact on this demographic. </p>

            <p style={{maxWidth: "100em"}}>To investigate this hypothesis, we will analyze the data from our questionnaire, this time focussing on data collected from women and/or underrepresented minorities. The goal is to determine if the features in RadGrad have helped this class of student to improve their undergraduate degree experience, and if they feel more committed to completing their degree as a result.</p>


            <h2>Next steps</h2>

            <p style={{maxWidth: "100em"}}>Thank you for reading all the way to the end of this document!  The next step is to post your initial thoughts to the <a href="https://radgrad.slack.com/messages/G6F3GLHNV/">RadGrad Advisory Board Slack Channel</a>. If you cannot get to the channel, please contact Philip and he will fix things for you. </p>
            <p style={{maxWidth: "100em"}}>I look forward to a thoughtful and productive conversation that helps to improve these plans!</p>
            <p style={{maxWidth: "100em"}}></p>

          </div>
        </Container>
      </div>
    );
  }
}

module.exports = AdvisoryBoard;
