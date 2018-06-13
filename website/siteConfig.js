// See https://docusaurus.io/docs/site-config.html for all the possible site configuration options.
const siteConfig = {
  title: 'RadGrad',
  tagline: 'Developing awesome computer scientists, one graduate at a time',
  url: 'https://radgrad.github.io' ,
  baseUrl: '/docusaurus/' ,
  projectName: 'docusaurus',
  organizationName: 'radgrad',
  headerLinks: [
    { doc: 'intro-motivation', label: 'Documentation'},
    { page: 'team2', label: 'Team'},
    { blog: true, label: 'News' }
  ],
  headerIcon: 'img/radgrad_logo.png',
  footerIcon: 'img/radgrad_logo.png',
  favicon: 'img/radgrad.ico',
  colors: {
    primaryColor: '#333333',
    secondaryColor: '#205C3B',
  },
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' RadGrad',

  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: ['https://fonts.googleapis.com/css?family=Nunito'],
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
