import { test, expect, Locator } from '@playwright/test';


//Text input
test("Text input actions", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator("input#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();

    const maxLength : string|null = await textbox.getAttribute("maxlength"); //returns the value of attribute
    expect(maxLength).toBe("15");

    await textbox.fill("Veeresh Pattar");
    // console.log("Text content of firstname is ", await textbox.textContent()); //returns empty
    const enteredValue: string = await textbox.inputValue();
    console.log("Input value of firstname is ", enteredValue); //returns input value
    expect(enteredValue).toBe("Veeresh Pattar");

    await page.waitForTimeout(3000);
});

test("radio button actions", async({page}) =>{

     await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio: Locator = page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false)
    
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true)

    await page.waitForTimeout(3000);
})

test.only("checkbox actions", async({page}) =>{

     await page.goto("https://testautomationpractice.blogspot.com/");

     //Select specific checkbox
    //  const sundayCheckBox : Locator =page.getByLabel("Sunday");
    //  await sundayCheckBox.check();
    //  await expect(sundayCheckBox).toBeChecked();

    // await page.waitForTimeout(3000);

    // await sundayCheckBox.uncheck();

    // await page.waitForTimeout(3000);

    //Select all the checkboxes and assert each checked
    const days:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const allcheckboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(allcheckboxes.length).toBe(7);

    for(const checkbox of allcheckboxes){
        await checkbox.check();
        await page.waitForTimeout(1000);
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);

    //last 3 checkboxes uncheck
    for(const checkbox of allcheckboxes.slice(-3)){
        await checkbox.uncheck();
        await page.waitForTimeout(1000);
        await expect(checkbox).not.toBeChecked();
    }

    await page.waitForTimeout(3000);


    //Toggle checkboxes: if checked, uncheck. If unchecked check. 
    for(const checkbox of allcheckboxes){
        if(await checkbox.isChecked()){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);

    //random select
    const indexes:number[] = [1, 3, 6];

    for(const i of indexes){
        await allcheckboxes[i].check();
        await expect(allcheckboxes[i]).toBeChecked();
    }
})

