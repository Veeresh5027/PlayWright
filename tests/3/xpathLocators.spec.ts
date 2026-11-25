import {test, expect,Locator} from '@playwright/test';

test('Understanding xpath locators', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');


    //1. Absolute xpath
    // const abslogo: Locator =  page.locator('xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]');
    // await expect(abslogo).toBeVisible();

    // //2. Relative xpath
    // const rellogo: Locator = page.locator('xpath=//img[@alt="Tricentis Demo Web Shop"]');
    // await expect(rellogo).toBeVisible();

    //3. contains() - used to find a partial match of an attribute value.
    const products : Locator = page.locator("//h2/a[contains(@href, 'computer')]");
    const productsCount:number = await products.count();
    console.log(productsCount)
    expect(productsCount).toBeGreaterThan(0);

    //4. textContent() - used to find an element by its textcontent.
    // console.log("1st computer name ", await products.first().textContent());
    // console.log("last computer name ", await products.last().textContent());
    // console.log("nth computer name ", await products.nth(2).textContent());

    let productTitles: String[] = await products.allTextContents();

    for(let pt of productTitles){
        console.log(pt);
    }

})