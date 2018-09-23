var callCentercCommands = {
    verifyNavigationToCallCenterPage: function () {
        console.log("Verify user is on call center page");
        this.assert.title("Homesite Insurance", "Assert page title");
        this.assert.urlContains('/static/homesite/contact_call_center', "Assert url for call center page");
        return this; // Return page object for chaining
    },
    verifyAllCallCenterPageContent: function () {
        this.assert.title("Homesite Insurance", "Assert page title");
        this.assert.containsText(this.elements.lblBanner.selector, lableText.bannerText, "Verify banner text");
        this.assert.containsText(this.elements.errMsg1.selector, lableText.errMsg1Text, "Verify thank you message");
        this.assert.containsText(this.elements.errMsg2.selector, lableText.errMsg2Text, "Verify message text");
        this.assert.containsText(this.elements.lblPhone.selector, lableText.phoneText, "Verify contact details");
        this.assert.containsText(this.elements.footerCopyRight.selector, lableText.copyrightText, "Verify contact center hours details");
        return this;
    }
};
lableText={
    bannerText: "Your Personalized Home Insurance Quote",
    errMsg1Text: "Thank you for requesting a policy through Homesite Homeowners Insurance Program",
    errMsg2Text: "Providing you with a fair and accurate quote is important to us. To ensure the best possible service, we would like you to speak with one of our agents who will complete the quote process with you.",
    phoneText: "Give us a call at 1-800-947-0713",
    copyrightText: "© Copyright 1999 - 2017 Homesite Insurance Group. All Rights Reserved."
};
module.exports = {
    url: function () {
        return this.api.launchUrl + '/static/homesite/contact_call_center';
    },
    commands: [callCentercCommands],
    elements: {
        lblBanner: { selector: "body > header > div > h1 > span" },
        submitButton: { selector: '[type=submit]' },
        errMsg1: { selector: "#homesite > div > h1"},
        errMsg2: { selector: "#homesite > div > p"},
        lblPhone: { selector: "#homesite > div > div.errorPage__boxContainer > div.errorPage__box.errorPage__call > h4"},
        footerCopyRight: { selector: ".footer__copyright"}
    }
};
