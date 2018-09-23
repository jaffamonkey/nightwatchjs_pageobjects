/* jshint expr: true */
module.exports = {
 
  tags: ['poc'],
  'Navigate to home page': function (client) {
    var homePage = client.page.home();
    homePage.navigate();
    client.assert.elementPresent('body', "Check page loaded");
  },

  'Verify user redirected to call center page': function (client) {
    var callCenter = client.page.callCenter();
    callCenter.verifyNavigationToCallCenterPage()
    client.waitForElementVisible('body', 5000);   
  },

  'Verify call center page content': function(client){
    var callCenter = client.page.callCenter();
    callCenter.verifyAllCallCenterPageContent();
  },

  after : function(client) {
    client.pause(5000); //for demo
    client.end();
  }
};