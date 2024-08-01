const { When, Given, Then } = require("@wdio/cucumber-framework")
const RegisterPage = require('../pages/register.page');
const loginPage = require('../pages/login.page');

Given(/^I am on the register page$/, async ()=>{
    await RegisterPage.open();
})

When(/^I register with valid credentials$/, async ()=>{
    await RegisterPage.register('Toko Baju 2024','baju2024@gmail.com','password');
})

Then(/^I should be redirected to the login page$/, async ()=>{
    // await RegisterPage.assertSuccessMessage('Toko berhasil didaftarkan')
    expect(browser).toHaveUrlContaining('/login');
})


// When(/^I register with invalid credentials$/, async ()=>{
//     await RegisterPage.register('Toko Bangunan 24','bangun244@gmail.com','password');
// })

// Then(/^I should see a error message$/, async ()=>{
//     expect(RegisterPage.errorMsg).toContain('Email sudah digunakan');
// })
// Given(/^I am on the login page$/, async ()=>{
//     await loginPage.open();
// })

// When(/^I register with valid credentials$/, async ()=>{
//     await loginPage.login('bangun2024@gmail.com','password');
// })

// Then(/^I should be redirected to the dashboard$/, async ()=>{
//     // await RegisterPage.assertSuccessMessage('Toko berhasil didaftarkan')
//     expect(browser).toHaveUrlContaining('/dashboard');
// })

