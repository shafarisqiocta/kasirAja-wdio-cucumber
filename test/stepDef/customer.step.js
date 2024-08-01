const { Given, When, Then } = require("@wdio/cucumber-framework");
const dashboardPage = require("../pages/dashboard.page");
const customerPage = require("../pages/customer.page");
const addCustomerPage = require("../pages/addCustomer.page");


Given(/^I am on the dashboard page$/, async () =>{
    await dashboardPage.open();
})

When(/^I go to the customer menu$/, async () =>{
    await dashboardPage.navigateToCustomer();
})

When(/^I click the add button$/, async () =>{
    await customerPage.clickAddBtn();
})

When(/^I fill in the add customer form$/, async () =>{
    await addCustomerPage.createCustomer('bunga','081523456789','malang','pelanggan baru');
})

Then(/^I should see an success message$/, async () =>{
    await customerPage.assertSuccessMsg('success');
})