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

    it("test case: Check if clicking the Contact link navigates user to the Product Page", async () => {
        const element = await driver.findElement(By.css("a[href='../introductionToHtml/e-commerceStore.Html']"));
        if (element.click()) {
            console.log('Yeah, it works')
            const navigator =  driver.navigate().to('../introductionToHtml/e-commerceStore.Html');
            if(navigator){
                const actualTitle = await driver.getTitle()
                const expectedTitle = 'Smart Bookstore'
                assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
            }
        }   
    })

    it("test case: It should navigate to Contact form page", async () => {
        const element = await driver.findElement(By.css("a[href='../htmlForms/contact.html']"))
        if(element.click()){
            const navigator = driver.navigate().to('../htmlForms/contact.html');
            if(navigator) {
                const actualTitle = await driver.getTitle()
                const expectedTitle = 'Contact Form'
                assert(actualTitle !== expectedTitle, `Exxpects ${actualTitle} to navigate to ${expectedTitle}`)
            }
        }
    })

    

})