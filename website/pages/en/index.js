/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
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
    <img src={props.img_src}/>
  </div>
);

const ProjectTitle = props => (
  <div>
    <h2 className="projectTitle">{siteConfig.title}</h2>
    <h2> {siteConfig.tagline}</h2>
  </div>
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
        <div className="inner">
          <ProjectTitle/>
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
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const LeftBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout}/>
  </Container>
);

const BlockNoPadding = props => (
  <Container
    padding={[]}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const Features = props => (
  <div>
    <LeftBlock background="light" layout="threeColumn">
      {[
        {
          content: 'The discipline of computer science evolves faster than any other. "Data science" became an important area\n' +
          '          of academic study in just a few years. In the same short time period, new technologies like Meteor and Docker\n' +
          '          have\n' +
          '          transformed application development.',
          image: imgUrl('data-science-degree.png'),
          imageAlign: 'left',
          align: 'left',
          title: 'The rate of change of computer science',
        },
        {
          content: 'In Marc Andreessen\'s Wall Street Journal article, he goes on to say: "we are in the middle of a dramatic and\n' +
          '          broad technological and economic shift in which software\n' +
          '          companies are poised to take over large swathes of the economy."',
          image: imgUrl('why-software-is-eating-the-world.jpg'),
          imageAlign: 'left',
          align: 'left',
          title: 'Software is eating the world',
        },
        {
          content: 'RadGrad analyzes current degree program progress with respect to future career desires, and helps\n' +
          '          students and their department actively plan in a data-driven fashion to improve post-graduation\n' +
          '          outcomes.',
          image: imgUrl('radgrad-diagram.jpg'),
          imageAlign: 'left',
          align: 'left',
          title: 'RadGrad in a nutshell',
        },
      ]}
    </LeftBlock>
  </div>
);

const Feature1 = props => (
  <div>
    <LeftBlock background="light" layout="twoColumn">
      {[
        {
          content: '',
          image: imgUrl('data-science-degree.png'),
          imageAlign: 'left',
          align: 'left',
          title: 'The rate of change of computer science',
        },
        {
          content: '<p>The discipline of computer science evolves faster than any other. "Data science" became an important area\n' +
          '          of academic study in just a few years. In the same short time period, new technologies like Meteor and Docker\n' +
          '          have\n' +
          '          transformed application development.</p>\n' +
          '        <p>Even the teaching of computer science is subject to frequent disruption. The first course taught as a\n' +
          '          "Massively Online Open Course" (MOOC) was Artificial Intelligence. A recent trend is the "coding bootcamp", a\n' +
          '          short, intensive, high-cost, non-university traineeship to help non-programmers quickly develop simple web\n' +
          '          application development skills.</p>\n' +
          '        <p>This rate of change means the discipline of computer science can evolve significantly from the time a student\n' +
          '          enters university to the time they graduate. RadGrad helps academic computer science degree programs, and the\n' +
          '          students in them, evolve their educational processes as fast as the discipline itself.</p>',
          align: 'left',
        },
      ]}
    </LeftBlock>
  </div>
);

const Feature2 = props => (
  <div>
    <LeftBlock  layout="twoColumn">
      {[
        {
          content: '<p>In Marc Andreessen\'s Wall Street Journal article, he goes on to say: "we are in the middle of a dramatic and\n' +
          '          broad technological and economic shift in which software\n' +
          '          companies are poised to take over large swathes of the economy."</p>\n' +
          '        <p>Some of the evidence: two billion people now use broadband Internet, up from 50 million a decade ago. The\n' +
          '          cost of cloud computing in that same decade has dropped from approximately $150K/month to $1500/month. The\n' +
          '          world\'s largest bookstore, Amazon, is a software company. The largest video service, NetFlix, is a software\n' +
          '          company. The most dominant music companies---Apple, Spotify, Pandora---are software companies. The fastest\n' +
          '          growing entertainment companies (videogames) are software companies. The fastest growing telcom is Skype; a\n' +
          '          software company.</p>\n' +
          '        <p>What does this imply for computer science students? It means that not\n' +
          '          only is computer science evolving <i>faster</i> than any other discipline, it is also more <i>pervasive</i>\n' +
          '          than any\n' +
          '          other discipline. CS\n' +
          '          students are surrounded by opportunities, but the competition for those opportunities is higher than ever.\n' +
          '          RadGrad helps CS students work smart as well as hard in order to maximize their chances for future success.\n' +
          '        </p>',
          align: 'left',
        },
        {
          content: '',
          image: imgUrl('why-software-is-eating-the-world.jpg'),
          imageAlign: 'left',
          align: 'left',
          title: 'Why Software is eating the world',
        },
      ]}
    </LeftBlock>
  </div>
);

const Feature3 = props => (
  <div>
    <LeftBlock background="light" layout="twoColumn">
      {[
        {
          content: '',
          image: imgUrl('radgrad-diagram.jpg'),
          imageAlign: 'left',
          align: 'left',
          title: 'RadGrad in a nutshell',
        },
        {
          content: '<p>RadGrad analyzes current degree program progress with respect to future career desires, and helps\n' +
          '          students and their department actively plan in a data-driven fashion to improve post-graduation\n' +
          '          outcomes.</p>\n' +
          '        <p>RadGrad helps computer science students evaluate the sometimes overwhelming number of academic and\n' +
          '          extracurricular opportunities, and determine ways to invest their time most productively given their career\n' +
          '          goals. </p>\n' +
          '        <p>RadGrad also helps computer science departments by providing data-backed evidence regarding the success,\n' +
          '          failure, and as-yet unrealized opportunities for the department to help produce successful computer\n' +
          '          scientists. </p>',
          align: 'left',
        },
      ]}
    </LeftBlock>
  </div>
);

const Feature4 = props => (
  <div>
    <LeftBlock  layout="twoColumn">
      {[
        {
          content: '<p>In this 12 minute screencast, Amy Takayesu, a graduate student in ICS, explains RadGrad from the\n' +
          '          student perspective.</p>',
          align: 'left',
        },
        {
          content: '<div style="margin-top:20px; margin-bottom: 20px;" class="embed-responsive embed-responsive-4by3">\n' +
          '          <iframe class="embed-responsive-item" src="//www.youtube.com/embed/BzgBlgWfTdE"></iframe>\n' +
          '        </div>',
          align: 'left',
          title: 'Amy Takayesu on RadGrad',
        },
      ]}
    </LeftBlock>
  </div>
);


class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div>
        <HomeSplash language={language}/>
        <div className="mainContainer">
          <Feature1/>
          <Feature2/>
          <Feature3/>
          <Feature4/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
