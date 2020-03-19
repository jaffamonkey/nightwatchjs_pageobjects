var commands = {
  submit: function() {
    return this.waitForElementVisible('@submitButton', 2000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton');
  }
};

module.exports = {
  url: 'https://google.com',
  commands: [commands],
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submitButton: {
      selector: 'input[name=btnK]',
    }
  }
};
