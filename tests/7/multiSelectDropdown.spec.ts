import { test, expect, Locator } from '@playwright/test';

test("Multi select dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select option from dropdown

    page.locator('#colors').selectOption(['Red', 'Blue', 'Green']);
    page.locator('#colors').selectOption(['red', 'blue', 'green']);
    page.locator('#colors').selectOption([{label:'Red'}, {label:'Blue'}]);
    page.locator('#colors').selectOption([{index:0}, {index:2}]);

    //2. check the no.of options in dropdown
    const dropdownOptions:Locator =page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);

    //3. check the options present in dropdown
    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);
    expect(optionsText).toContain('Green');

    //4. printing options from the dropdown.
    for(const option of optionsText){
        console.log(option);
    }
    
    await page.waitForTimeout(3000);
});