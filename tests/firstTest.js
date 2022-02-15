const {Builder} = require ("selenium-webdriver");

async function example(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our applciation
    await driver.get("https://www.saucedemo.com/");

}

example();