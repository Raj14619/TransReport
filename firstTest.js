const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const assert = require ("assert");

async function loginAndPasswordSuccessAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to website
    await driver.get("https://www.saucedemo.com/");
    
   

    // input correct username and password and click login
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   
     await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    
    // get current website URL
    var title = await driver.getCurrentUrl();
   

    assert.equal(title,"https://www.saucedemo.com/inventory.html");

}


async function loginAndPasswordFailureAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");



    //input incorrect username and password and click login
    await driver.findElement(By.id("user-name")).sendKeys("12333");   

    await driver.findElement(By.id("password")).sendKeys("12333", Key.ENTER);   



    // true if login error message is displayed   
    var isLoginPasswordErrorMessageDisplayed = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[3]/h3")).isEnabled();
  

    assert.equal(isLoginPasswordErrorMessageDisplayed, true);
}

loginAndPasswordSuccessAssertion();
loginAndPasswordFailureAssertion();