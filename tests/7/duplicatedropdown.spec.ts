import { test, expect, Locator } from '@playwright/test';

test("Multi select dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const dropDownOptions:Locator  = page.locator('#colors>option'); //having duplicates
    const dropDownOptions:Locator  = page.locator('#animals>option') //not having duplicates

    const optionsText:string[] = (await dropDownOptions.allTextContents()).map(text=>text.trim());

    const myset = new Set<string>();  //set - duplicates not allowed
    const duplicates : string[] = []; //array - duplicates allowed

    for(const text of optionsText){
        if(myset.has(text)){
            duplicates.push(text);
        }
        else{
            myset.add(text);
        }
    }

    if(duplicates.length>0){
        console.log("Dupplicate options found")
        console.log("Duplicate options are => ", duplicates);
    }
    else{
        console.log("Dupplicate options not found")
    }
    expect(duplicates).toHaveLength(0);

    await page.waitForTimeout(3000);
});