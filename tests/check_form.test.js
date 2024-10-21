// tests/check_form.test.js
const { chromium } = require('playwright');

(async () => {
  // Launch the browser (headless mode for GitHub Actions)
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the form page
  await page.goto('https://www.jdu.uz/abituriyentlar_uchun', { timeout: 60000 });

  // Fill in the name field
  await page.fill('input[placeholder="Ismingiz"]', 'John Doe'); // Adjust selector based on the actual input field

  // Fill in the phone number field
  await page.fill('input[type="tel"]', '+998 99-999-9999'); // Adjust if needed

  // Click the submit button
  await page.click('text=Yuborish'); // Click the submit button

  // Optionally, you can wait for a success message or redirect
  // await page.waitForSelector('selector-for-success-message', { timeout: 60000 });

  // Close the browser
  await browser.close();
})();
