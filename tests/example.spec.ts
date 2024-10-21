// tests/playwright.test.js
const { chromium } = require('playwright'); // You can also use 'firefox' or 'webkit'

(async () => {
  // Launch a browser instance
  const browser = await chromium.launch({ headless: true }); // 'headless: false' if you want to see the browser in action
  const page = await browser.newPage();

  // Visit the target site
  await page.goto('https://jdu.uz');

  // Check if the page title is as expected
  const pageTitle = await page.title();
  console.log(`Page title: ${pageTitle}`);

  // Example: Assert the title contains "JDPU"
  if (pageTitle.includes('JDPU')) {
    console.log('Title test passed!');
  } else {
    console.error('Title test failed.');
  }

  // Check for a specific element, for example, an `h1` tag
  const heading = await page.$('h1');
  if (heading) {
    console.log('Heading found!');
  } else {
    console.log('Heading not found.');
  }

  // Close the browser
  await browser.close();
})();
