const{test, expect} = require (`@playwright/test`)
test (`Demo`, async ({page}) => {

    await page.goto(`https://www.google.com/`);
})