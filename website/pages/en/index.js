/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('radgrad_logo.png')} />
        <div className="inner">
          <ProjectTitle />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('radgrad-landing.png'),
        imageAlign: 'right',
        title: 'Why RadGrad?',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Why RadGrad?</h2>
    <MarkdownBlock>## We believe that the discipline of computer science evolves faster and is more pervasive than any other. "Data science" became an important area of academic study in just a few years. Self-driving cars is now an industry, but it was a research project five years ago.


      Even the teaching of computer science is subject to frequent disruption. The first course taught as a "Massively Online Open Course" (MOOC) was Artificial Intelligence. A recent trend is the "coding bootcamp", a short, intensive, high-cost, non-university traineeship to help non-programmers quickly develop simple web application development skills. For some, bootcamps call into the question the return-on-investment of a four year university degree in computer science.


      Virtually no intellectual discipline is untouched by computer science. Indeed, many departments of computer science have renamed themselves as departments (or Colleges) of "Information", recognizing the more fundamental nature of the field.


      The rate of change and pervasiveness of computer science creates issues for today's students.  Focal areas can evolve significantly from the time a student enters university to the time they graduate. For example, seniors in Computer Science in 2016 might be questioned during interviews about "deep learning", a term that did not exist four years earlier when they started taking classes.


      A second issue is the complementary nature of computer science with other disciplines: there is no "natural" second area of study with computer science because *every* other area goes well with computer science. This limitless choice creates its own set of issues: how can the student maximize the combination of disciplines, find peers with similar interests, and find faculty who can help them integrate two (or even more) disciplines effectively?

      RadGrad attempts to improve the computer science degree experience through technology that enables students to: (1) better understand the discipline and how it can relate to their interests and goals; (2) become more engaged with fellow students, faculty, and community members who share their interests, resulting in students (3) embarking upon projects both inside and outside the classroom that produce a richer and more comprehensive knowledge of the discipline.  We hypothesize that the above goals should positively impact student demographics and outcomes: there should be (4) more diversity in student makeup and interests, and (5) upon graduation they should have more and better opportunities.
    </MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
