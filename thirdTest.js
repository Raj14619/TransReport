const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const assert = require ("assert");
const { WebElement } = require("selenium-webdriver");
const { WebDriver } = require("selenium-webdriver");

async function addThreeItemsToBasketAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");
    
    console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   

    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/button")).click();

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/button")).click();

    await driver.get("https://www.saucedemo.com/cart.html");

    var numberOfItemsInCart = await driver.findElements(By.className('cart_item'));

    console.log(numberOfItemsInCart.length);

    assert.equal(numberOfItemsInCart.length,3);
    
}




async function addThreeItemsToBasketAndRemoveOneItemAssertion(){

      // launch browser
      let driver = await new Builder().forBrowser("chrome").build();

      // navigate to website
       await driver.get("https://www.saucedemo.com/");
       
   
       var username = driver.findElement(By.id("user-name")).getText();
       
       await driver.findElement(By.id("user-name")).sendKeys("standard_user");   
   
       await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   
   
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();
   
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/button")).click();
   
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/button")).click();
   
       await driver.get("https://www.saucedemo.com/cart.html");
   
       var numberOfItemsInCartAtFirstCheckout = await driver.findElements(By.className('cart_item'));
   
       console.log(numberOfItemsInCartAtFirstCheckout.length);

      await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/button[1]")).click();

      await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();

      await driver.get("https://www.saucedemo.com/cart.html");

      var numberOfItemsInCartAtSecondCheckout = await driver.findElements(By.className('cart_item'));
   
      console.log(numberOfItemsInCartAtSecondCheckout.length);

      
     hasChanged = false;

    if(numberOfItemsInCartAtFirstCheckout.length - numberOfItemsInCartAtSecondCheckout.length == 1){
        hasChanged = true;
    }

      assert.equal(hasChanged,true);
      
}


//addThreeItemsToBasketAssertion();
addThreeItemsToBasketAndRemoveOneItemAssertion();