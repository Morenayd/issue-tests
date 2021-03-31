var file_path = process.env.FILE_PATH
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");



describe("Testing Navigation on HtmlForms", function() {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder().forBrowser('chrome').build()

    before(function setupWebdriver(done) {
        var file_url = `file:///Users/user/Downloads/Dufuna-CodeCamp20/submissions/oyetejuOloyede/htmlForms/contact.html`;
       
        driver.get(file_url).then(done)
    })

    after(function() {
        driver.quit()
    })

    it("test case: check if Contact Us link is present",  async () => {
        const element = await driver.findElement(By.css("a[href='../htmlForms/contact.html']"));
        const link = await element.getText()
        assert.include(link, "Contact Us", `Ensure Link is present`)
    })

    it("tests case: Check if Product Link is present", async () => {
        const element = await driver.findElement(By.css("a[href='../introductionToHtml/e-commerceStore.Html']"));
        const link = await element.getText()
        assert.include(link, "Product Page", `Ensure link is presnt` )
    })

    it("test case: Check if clicking of link navigates user to the required page", async () => {
        const element = await driver.findElement(By.css("a[href='../htmlForms/contact.html']"))

        if (element.click()) {
            await driver.navigate().to("../htmlForms/contact.html")
            const actualTitle = await driver.getTitle()
            const expectedTitle = 'Contact Form'
            assert.notEqual(actualTitle, expectedTitle)
        }   

    })
})
