const{test, expect} = require (`@playwright/test`)
test (`Demo`, async ({page}) => {

    await page.goto(`https://bolt.playrealbrokerage.com/login`);
    await page.waitForLoadState("domcontentloaded");

    await page.getByText(`Join Real`).click();
    await page.locator(`[data-testid="text-input-First Name"]`).fill("Pintu");
    await page.locator(`[data-testid="text-input-Last Name"]`).fill("Kumar");
    await page.locator(`[data-testid="text-input-Username"]`).fill("PIN123");
    await page.locator(`[data-testid="email-input-Email"]`).fill("test123@gmail.com");
    await page.locator(`[data-testid="password-input-Password"]`).fill("PASS123");
    await page.locator(`[placeholder="Confirm password"]`).fill("PASS123");
    await page.locator(`[data-testid="consentedToTerms"]`).check();
    await page.locator(`[data-testid="consentedToCallMessage"]`).check();
    await page.getByRole('[type="submit"]');
})