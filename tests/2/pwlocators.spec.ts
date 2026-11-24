    /* 
    page.getByRole() to locate by explicit and implicit accessibility attributes.
    page.getByText() to locate by text content.
    page.getByLabel() to locate a form control by associated label's text.
    page.getByPlaceholder() to locate an input by placeholder.
    page.getByAltText() to locate an element, usually image, by its text alternative.
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    */

    import { test, expect, Locator } from '@playwright/test';

    test('locators', async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


        //1. page.getByAltText()
        // const logo:Locator =  page.getByAltText('company-branding')
        // await expect(logo).toBeVisible();

        //2. page.getByText()
        // const text:Locator =page.getByText('Welcome to our store');
        // await expect(text).toBeVisible();

        // await expect(page.getByText('Login').first()).toBeVisible();

        //3. page.getByRole() - Locating by role. (Role is not an attribute.)
        // const orangeHrmLink:Locator =page.getByRole('link', {name: 'OrangeHRM, Inc'});
        // await orangeHrmLink.click();

        //for non-interactive elements, we can use getByRole().
        // await expect(page.getByRole('heading', {name: 'Login'}).first()).toBeVisible();

        //5. page.getByPlaceholder() - Locating an input by placeholder.
        // await page.getByPlaceholder('Username').fill('Admin');
        // await page.getByPlaceholder('Password').fill('admin123');

        // await page.getByRole('button', { name: 'Login' }).click();

        // await expect(page.getByRole('heading', { name: 'Dashboard' }).first()).toBeVisible();

        
        await expect(page).toHaveTitle('OrangeHRM');
       

    })

//4. page.getByLabel() - Locating a form control by associated label's text.
// test('getByLabel practice', async ({ page }) => {
//   await page.setContent(`
//     <form>
//       <label for="username">Username</label>
//       <input id="username" type="text" />

//       <label>
//         Password
//         <input type="password" />
//       </label>

//       <label for="remember">Remember me</label>
//       <input id="remember" type="checkbox" />
//     </form>
//   `);

//   await page.getByLabel('Username').fill('Admin');
//   await page.getByLabel('Password').fill('admin123');
//   await page.getByLabel('Remember me').check();

//   await expect(page.getByLabel('Username')).toHaveValue('Admin');
//   await expect(page.getByLabel('Remember me')).toBeChecked();
// });

//6. page.getByTitle() - Locating an element by its title attribute.
test('using getByTitle', async ({ page }) => {
  await page.setContent(`
    <a href="/dashboard" title="Go to Dashboard">Home</a>
    <button title="Delete item permanently">🗑️</button>
    <span title="255">255 items</span>
  `);

  // 1. Substring match (default)
  await expect(page.getByTitle('Dashboard')).toBeVisible();

  // 2. Exact match
  await expect(page.getByTitle('Go to Dashboard', { exact: true })).toHaveText('Home');

  // 3. Regular expression (case-insensitive)
  await page.getByTitle(/delete item/i).click();

  // 4. Exact match with number/short string
  await expect(page.getByTitle('255', { exact: true })).toBeVisible();
});

test('using getByTestId', async ({ page }) => {
  await page.setContent(`
    <button data-testid="submit-order">Place Order</button>
    <div data-testid="cart-count">3</div>
  `);

  await page.getByTestId('submit-order').click();
  await expect(page.getByTestId('cart-count')).toHaveText('3');
});