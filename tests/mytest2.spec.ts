import { test, expect } from '@playwright/test';

test('verify page url', async ({page})=>{

    await page.goto('https://www.instagram.com/')
    let title:string = await page.title()
    console.log("Title :", title)
    
    await expect(page).toHaveTitle(/Instagram/)
    
})
