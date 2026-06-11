import {test, expect} from '@playwright/test';

test.describe('Shopping-contenirazed e2e tests', () => {
    test.beforeEach(async({page}) => {
        await page.goto("/");
    })
    test("Products are visible", async({page}) => {
        await expect(page.getByText('ADD TO CART').first()).toBeVisible();
    });
    test("Products can be added to cart", async({page}) => {
        const button = await page.getByText('ADD TO CART').first();
        await button.click();
        await expect(page.getByText("Total", {exact:false})).toBeVisible();
    })
})