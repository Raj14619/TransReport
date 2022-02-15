const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const assert = require ("assert");

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

    console.log(username);

    //assert.strictEqual(username,"standard_user");
         
    var title = await driver.getCurrentUrl();
    console.log(title);

    assert.equal(title,"https://www.saucedemo.com/inventory.html");

}


async function loginAndPasswordFailureAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");

    //
    
 //   console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("12333");   

    await driver.findElement(By.id("password")).sendKeys("12333", Key.ENTER);   

    //console.log(username);

     
    var isLoginPasswordErrorMessageDisplayed = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div[1]/div/form/div[3]/h3")).isEnabled();
    console.log(isLoginPasswordErrorMessageDisplayed);

    assert.equal(isLoginPasswordErrorMessageDisplayed,"true");
}

//loginAndPasswordSuccessAssertion();
loginAndPasswordFailureAssertion();