var homeCommands = {
  login: function (userName, password) {
    this.useXpath().waitForElementVisible(this.elements.txtUserName, 3000)
      .setValue(this.elements.txtUserName, userName)
      .setValue(this.elements.txtPassword, password)
      .click(this.elements.btnLogin)
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: function () {
    console.log("Navigate to home page");
    return this.api.launchUrl + '/1/home/quote';
  },
  commands: [homeCommands],
  elements: {
    txtUserName: { selector: 'input[name=user]' },
    txtPassword: { selector: 'input[name=pwd]' },
    btnLogin: { selector: '[type=submit]' }
  }
};
