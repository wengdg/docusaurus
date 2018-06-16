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
      <span style={{ fontFamily: 'Nunito', fontWeight: 700 }} className="projectTitle">RAD</span>
      <span style={{ fontFamily: 'Nunito', fontWeight: 400 }} className="projectTitle">GRAD</span>
      <h2>{siteConfig.tagline}</h2>
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
    <Container>
      <div className="overview">
        <h1 style={{fontSize: "24px", paddingTop: "30px", paddingBottom: "10px", fontWeight: "400", textAlign: "center"}}>The goal of RadGrad is to improve the undergraduate STEM degree experience.</h1>
        <h4 style={{paddingBottom: "10px", fontWeight: "300", textAlign: "center"}}>Target outcomes include increased engagement and retention, particularly for women and underrepresented minorities,</h4>
        <h4 style={{paddingBottom: "10px", fontWeight: "300", textAlign: "center"}}>and improved post-graduation career opportunities for all participating students.</h4>
        <h4 style={{paddingBottom: "10px", fontWeight: "300", textAlign: "center"}}>We currently focus on computer science and computer engineering degree programs.</h4>
      </div>
    </Container>
);

// NOTE: Do not include width attribute in <iframe>--- it messes up mobile site display.
const AmyVideo = props => (
    <div style={{background: "white", paddingTop: "20px", paddingBottom: "20px"}}>
      <div align="center">
      <iframe height="315" src="https://www.youtube.com/embed/BzgBlgWfTdE" frameBorder="0"
                allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <div style={{textAlign: "center"}}>
        <h3 style={{fontWeight: "400", fontSize: "16px"}}>Introduction to RadGrad, Amy Takayesu (January, 2017)</h3>
      </div>
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
