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
    
    // login with correct username and password
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   
    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    // add 3 items to basket
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/button")).click();
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/button")).click();


    // go to checkout page
    await driver.get("https://www.saucedemo.com/cart.html");


    // get list of items added to cart
    var numberOfItemsInCart = await driver.findElements(By.className('cart_item'));

    assert.equal(numberOfItemsInCart.length,3);
    
}




async function addThreeItemsToBasketAndRemoveOneItemAssertion(){

      // launch browser
      let driver = await new Builder().forBrowser("chrome").build();

      // navigate to website
       await driver.get("https://www.saucedemo.com/");
       
       // login with correct username and password
       await driver.findElement(By.id("user-name")).sendKeys("standard_user");   
       await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   
   
       // add 3 items to basket
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/button")).click();
       await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/button")).click();
   
       // got to checkout page
       await driver.get("https://www.saucedemo.com/cart.html");
   
       // get list of items added to cart
       var numberOfItemsInCartAtFirstCheckout = await driver.findElements(By.className('cart_item'));
   

      // go back to products page
      await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/button[1]")).click();

      // remove item from basket which has already been added to the cart
      await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button")).click();

      // go to checkout page
      await driver.get("https://www.saucedemo.com/cart.html");

      // get list of items added to cart
      var numberOfItemsInCartAtSecondCheckout = await driver.findElements(By.className('cart_item'));
      
     hasChanged = false;

     // get the total number of items from first checkout and minus it from the total number of items from the second checkout and make sure it equals 1
    if(numberOfItemsInCartAtFirstCheckout.length - numberOfItemsInCartAtSecondCheckout.length == 1){
        hasChanged = true;
    }

      assert.equal(hasChanged,true);
      
}


addThreeItemsToBasketAssertion();
addThreeItemsToBasketAndRemoveOneItemAssertion();