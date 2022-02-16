const {Builder, By, Key} = require ("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const assert = require ("assert");
const { WebElement } = require("selenium-webdriver");
const { WebDriver } = require("selenium-webdriver");

async function loginAndProductPriceFilterSuccessAssertion(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");

    //
    
    console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   

    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    
    //Get number of products shown
    var inventory_list = await driver.findElements(By.className('inventory_item'));

    console.log(inventory_list.length);



    

    // Set filter to PRICE (LOW TO HIGH)
    await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div[2]/div[2]/span/select/option[3]')).click();



    // get price of products shown -INCOMPLETE

    var prices = await driver.findElements(By.className('inventory_item_price'));


    var arrayOfPricesWithIntegersOnly = new Array();


    for(let e of prices){
        console.log(await e.getText());
        var pricesWithoutDollarSign = (await e.getText()).replace('$','');
        arrayOfPricesWithIntegersOnly.push(pricesWithoutDollarSign);
    }


    for(let x of arrayOfPricesWithIntegersOnly){
        console.log(await x);
    }

    var issorted = true;

    for(let x = 0; x < arrayOfPricesWithIntegersOnly.length-1; x++){
        if(new Number(arrayOfPricesWithIntegersOnly.at(x)) > new Number (arrayOfPricesWithIntegersOnly.at(x+1)) ){
            issorted = false;
        console.log("x: "+(arrayOfPricesWithIntegersOnly.at(x))); 
        console.log("x+1: "+(arrayOfPricesWithIntegersOnly.at(x+1)));
        
        }      
    }

    //console.log(issorted);
    assert.equal(issorted,true);


}




async function loginAndProductPriceFilterFailureAssertion(){

   // launch browser
   let driver = await new Builder().forBrowser("chrome").build();

   // navigate to website
    await driver.get("https://www.saucedemo.com/");

    //
    
    console.log("ok");

    var username = driver.findElement(By.id("user-name")).getText();
    
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");   

    await driver.findElement(By.id("password")).sendKeys("secret_sauce", Key.ENTER);   

    
    //Get number of products shown
    var inventory_list = await driver.findElements(By.className('inventory_item'));

    console.log(inventory_list.length);


    // get price of products shown -INCOMPLETE

    var prices = await driver.findElements(By.className('inventory_item_price'));


    var arrayOfPricesWithIntegersOnly = new Array();


    for(let e of prices){
        console.log(await e.getText());
        var pricesWithoutDollarSign = (await e.getText()).replace('$','');
        arrayOfPricesWithIntegersOnly.push(pricesWithoutDollarSign);
    }


    for(let x of arrayOfPricesWithIntegersOnly){
        console.log(await x);
    }

    var issorted = true;

    for(let x = 0; x < arrayOfPricesWithIntegersOnly.length-1; x++){
        if(new Number(arrayOfPricesWithIntegersOnly.at(x)) > new Number (arrayOfPricesWithIntegersOnly.at(x+1)) ){
            issorted = false;
        console.log("x: "+(arrayOfPricesWithIntegersOnly.at(x))); 
        console.log("x+1: "+(arrayOfPricesWithIntegersOnly.at(x+1)));
        
        }      
    }

    //console.log(issorted);
    assert.equal(issorted,false);


}

//loginAndProductPriceFilterSuccessAssertion();
//loginAndProductPriceFilterFailureAssertion();
