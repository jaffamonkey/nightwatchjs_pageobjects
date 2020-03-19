/**
 * A demo test using the Nightwatch JS test framework.
 *
 * Written using the Nightwatch format rather than Mocha.
 */
module.exports = {
  before: function(browser) {
    console.log("Before the suite.");
  },
  after: function(browser) {
    console.log("After the suite.");
  },
  beforeEach: function(browser) {
    console.log("Before a test.");
  },
  afterEach: function(browser) {
    console.log("After a test.");
  },
  'Demo test Google' : function (browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .submit();

    browser
      .waitForElementVisible('#main')
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
