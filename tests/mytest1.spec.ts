import { test, expect } from '@playwright/test';

//Syntax
// test('title', ()=> {
//     //step1
//     //step2
//     //step3...
// })

test('verify page title', async ({page})=>{

    await page.goto('https://www.facebook.com/')
    let title:string = await page.title()
    console.log("Title :", title)
    
    await expect(page).toHaveTitle('Facebook')
    
})
