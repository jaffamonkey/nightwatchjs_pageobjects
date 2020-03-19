
module.exports = {
  before: function(browser) {
    console.log("Starting Nightwatch test suite");
  },
  after: function(browser) {
    console.log("Test suite run ended.");
  },
  beforeEach: function(browser) {
    console.log("Starting test ...");
  },
  afterEach: function(browser) {
    console.log("Test ended.");
  },
  'Demo test Google' : function (browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .submit()
      .waitForElementVisible('#main')
      .assert.containsText('#main', 'Night Watch')
      .end();
  },
  'Demo test Google (fail demo)' : function (browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .submit()
      .waitForElementVisible('#main')
      .assert.containsText('#main', 'Night WWatch')
      .end();
  }
};
