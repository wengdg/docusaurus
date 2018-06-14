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
    <img style={{ paddingRight: "10px" }} width='55px' src={imgUrl('radgrad_logo.png')}/>
    <span>
    <span style={{ fontFamily: 'Nunito', fontWeight: 700 }} className="projectTitle">RAD</span>
    <span style={{ fontFamily: 'Nunito', fontWeight: 400 }} className="projectTitle">GRAD</span>
    </span>
    <h2>{siteConfig.tagline}</h2>
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

const Overview = props => (
    <div className="overview">
      <p style={{fontSize: "24px", paddingTop: "30px", paddingBottom: "10px"}}>The goal of RadGrad is to improve the undergraduate STEM degree experience.</p>
      <p style={{paddingBottom: "10px", fontWeight: "300"}}>Target outcomes include increased engagement and retention for women and underrepresented minorities,</p>
    <p style={{paddingBottom: "10px", fontWeight: "300"}}>and improved post-graduation career opportunities for all participating students.</p>
      <p style={{paddingBottom: "10px", fontWeight: "300"}}>We currently focus on computer science and computer engineering degree programs.</p>
    </div>
);

const AmyVideo = props => (
    <div style={{background: "white", paddingTop: "20px", paddingBottom: "20px"}}>

      <div align="center" className="inner" style={{paddingTop: "20px"}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BzgBlgWfTdE" frameBorder="0"
                allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <div style={{textAlign: "center"}}>
        <p style={{fontWeight: "400", fontSize: "16px"}}>Introduction to RadGrad, Amy Takayesu (January, 2017)</p>
      </div>
    </div>
);

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

const Feature4 = props => (
  <div>
    <LeftBlock layout="twoColumn">
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
          <Overview/>
          <AmyVideo/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
