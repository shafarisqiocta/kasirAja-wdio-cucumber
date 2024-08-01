const { Given, When, Then } = require("@wdio/cucumber-framework");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");


Given(/^I am on the login page$/, async ()=>{
    await loginPage.open();
})

When(/^I login with password invalid$/, async () => {
    await loginPage.login('baju2024@gmail.com','test123');
})

Then(/^I should see an error message$/, async () => {
    await loginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
})

When(/^I login with valid credentials$/, async ()=>{
    await loginPage.login('baju2024@gmail.com','password');
})

Then(/^I should be redirected to the dashboard$/, async ()=>{
    await dashboardPage.assertDashboardUrl();
   
})

