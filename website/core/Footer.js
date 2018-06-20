/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="nav-footer" id="footer">
          <section className="sitemap">
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                  <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58"/>
              )}
            </a>
            <div>
              <h5>Guided Tours</h5>
              <a href="https://radgrad.ics.hawaii.edu/guidedtour/student" target="_blank" rel="noreferrer noopener">For students</a>
              <a href="https://radgrad.ics.hawaii.edu/guidedtour/advisor" target="_blank" rel="noreferrer noopener">For advisors</a>
              <a href="https://radgrad.ics.hawaii.edu/guidedtour/faculty" target="_blank" rel="noreferrer noopener">For faculty</a>
              <a href="https://radgrad.ics.hawaii.edu/guidedtour/mentor" target="_blank" rel="noreferrer noopener">For mentors</a>
            </div>
            <div>
              <h5>Explorers</h5>
              <a href="https://radgrad.ics.hawaii.edu/explorer/career-goals/data-scientist" target="_blank" rel="noreferrer noopener">Career Goals</a>
              <a href="https://radgrad.ics.hawaii.edu/explorer/interests/dotNet" target="_blank" rel="noreferrer noopener">Interests</a>
              <a href="https://radgrad.ics.hawaii.edu/explorer/opportunities/3d-chip-layouts" target="_blank" rel="noreferrer noopener">Opportunities</a>
              <a href="https://radgrad.ics.hawaii.edu/explorer/courses/ics_361" target="_blank" rel="noreferrer noopener">Courses</a>
            </div>
            <div>
              <h5>Development</h5>
              <a href="https://radgrad.slack.com/" target="_blank" rel="noreferrer noopener">Slack</a>
              <a href="https://github.com/radgrad">GitHub</a>
              <a href={this.props.config.baseUrl + 'team.html'}>Team</a>
              <a href={this.props.config.baseUrl + 'contact-us.html'}>Contact Us</a>
            </div>
          </section>
          <p style={{textAlign: 'center', color: 'white'}}>RadGrad is sponsored by:<br/>
            <a style={{textAlign: 'center', color: 'white'}} href="http://csdl.ics.hawaii.edu">Collaborative Software Development Laboratory</a><br/>
            <a style={{textAlign: 'center', color: 'white'}} href="http://www.ics.hawaii.edu">Department of Information and Computer Sciences</a><br/>
            <a style={{textAlign: 'center', color: 'white'}} href="http://www.hawaii.edu">University of Hawaii</a><br/>
            </p>
        </footer>
    );
  }


}

module.exports = Footer;
