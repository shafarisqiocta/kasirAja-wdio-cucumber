const { Given, When, Then } = require("@wdio/cucumber-framework");
const dashboardPage = require("../pages/dashboard.page");
const categoryPage = require("../pages/category.page");
const addCategoryPage = require("../pages/addCategory.page");

Given(/^I am on the dashboard page$/, async ()=>{
    await dashboardPage.open();
})

When(/^I go to the category menu$/, async ()=>{
    await dashboardPage.navigateToCategory();
})

When(/^I click the add button$/, async ()=>{
    await categoryPage.clickAddBtn();
})

When(/^I fill in the category name and description$/, async ()=>{
    await addCategoryPage.createCategory('Kategori Pertama','Test Deskripsi');
})

Then(/^I should see an success message$/, async ()=>{
    await categoryPage.assertSuccessMsg('success');
})