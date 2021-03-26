var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Scholars Project", function () {
    this.timeout(5 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        driver.get("file:///C:/Users/oemma/mocha_test/Dufuna-Fem/submissions/modupeAdeOnojobi/html-forms/contact.html").then(done)
    });
    it('test case: assert 4 input fields are present', async () => {
        const images = await driver.findElements(By.css('input'));
        const size = images.length

        assert.equal(size, 4, `Ensure you have all the input fields in the order stated in the task criteria`);
    });

    it('test case: Full Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
        const text = await name.getText();
        assert.equal(text, "Full Name", `Ensure "Full Name" label is present`);

    });

    it('test case: Email label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
        const text = await name.getText();
        assert.equal(text, "Email", `Ensure "Email" label is present`);

    });

    it('test case: Subject label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
        const text = await name.getText();
        assert.equal(text, "Subject", `Ensure "Subject" label is present`);
    });

    it('test case: Message label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
        const text = await name.getText();
        assert.equal(text, "Message", `Ensure "Message" label is present`);
    });
});