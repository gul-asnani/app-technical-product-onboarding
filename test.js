const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:udid': '4612d63f',
  'appium:appPackage': 'org.wikipedia',
  'appium:appActivity': '.search.SearchActivity',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  path: "/wd/hub",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  driver = await remote(wdOpts);
  
  // test 1 => positive
  try {
    const searchItem = await driver.$('//*[@text="Search Wikipedia"]');
    await searchItem.click();
    searchItem.sendKeys(["123"]);
    const searchTopic = await driver.$('//*[@text="123Movies"]');
    searchTopic.click();
  } catch (e) {
    if (error instanceof Error) {
      console.log("Test failure");
    }
  } finally {
    await driver.pause(5000);
    await driver.deleteSession();
  }

  // test 2 => negative
  driver = await remote(wdOpts);
  try {
    const searchItem = await driver.$('//*[@text="Search Wikibooks"]');
    await searchItem.click();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Negative test successful");
    }
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);