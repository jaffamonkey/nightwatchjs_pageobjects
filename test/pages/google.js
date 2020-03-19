var commands = {
  submit: function () {
    return this.waitForElementVisible('@submitButton', 2000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  },
  performSearch: function (searchString) {
    return this.api
      .url(url)
      .waitForElementVisible('body')
      .setValue(searchBar, searchString)
      .click(submitButton)
      .assert.title(searchString + ' - Google Search')
      .assert.containsText('#main', searchString)
      .end()
  }
};

module.exports = {
  url: 'https://google.com',
  commands: [commands],
  elements: {
    searchBar: { selector: 'input[type=text]' },
    submitButton: { selector: 'input[name=btnK]' }
  }
};
