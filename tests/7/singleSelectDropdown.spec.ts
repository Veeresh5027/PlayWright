import { test, expect, Locator } from '@playwright/test';

test("Single select dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select option from dropdown

    // await page.locator("#country").selectOption("India"); //visible text
    // await page.locator("#country").selectOption({value : "uk"}); //value 
    // await page.locator("#country").selectOption({label:"India"}); //label
    await page.locator("#country").selectOption({index:3}); //index

    //2. check the no.of options in dropdown
    const dropdownOptions:Locator =  page.locator('#country>option');
    await expect(dropdownOptions).toHaveCount(10);

    //3. check the options present in dropdown
    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);
    expect(optionsText).toContain('India');

    //4. printing options from the dropdown.
    for(const option of optionsText){
        console.log(option);
    }

    await page.waitForTimeout(3000);

    
})