// See https://docusaurus.io/docs/site-config.html for all the possible site configuration options.

const siteConfig = {
  title: 'RadGrad' /* title for your website */,
  tagline: 'Growing awesome computer scientists, one graduate at a time',
  url: 'https://radgrad.github.io' /* your website url */,
  baseUrl: '/docusaurus/' /* base url for your project */,
  // baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docusaurus',
  organizationName: 'RadGrad',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'why', label: 'Documentation'},
    { page: 'team2', label: 'Team'},
    { blog: true, label: 'News' }
  ],

  /* path to images for header/footer */
  headerIcon: 'img/radgrad_logo.png',
  footerIcon: 'img/radgrad_logo.png',
  favicon: 'img/radgrad.ico',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' RadGrad',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
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
