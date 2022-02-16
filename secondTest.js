const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const assert = require ("assert");
const { WebElement } = require("selenium-webdriver");
const { WebDriver } = require("selenium-webdriver");

async function loginAndPasswordSuccessAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");

    //
    
    console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   

    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    var inventory_list = await driver.findElements(By.className('inventory_item'));



    console.log(inventory_list.length);
    

}




async function loginAndPasswordFailureAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");

    //
    
    console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   

    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    console.log(username);

    //assert.strictEqual(username,"standard_user");
         
    var title = await driver.getElement(By.id(""));
    console.log(title);

    assert.equal(title,"https://www.saucedemo.com/inventory.html");

}

loginAndPasswordSuccessAssertion();