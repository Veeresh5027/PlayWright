import {test, expect,Locator} from '@playwright/test';

test('Verify CSS locators', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');

    //1. tag#id
    // const searchbox : Locator = page.locator('input#small-searchterms');
    // await expect(searchbox).toBeVisible();
    // await searchbox.fill('laptop');

    // await page.waitForTimeout(5000);

    // 2. tag.class
    // await page.locator("input.search-box-text").fill("shirts");

    // 3. tag[attr='value']
    await page.locator("input[name='q']").fill("shirts");
})