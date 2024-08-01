class LoginPage{
    
    get inputEmail(){
        return $('#email');
    }
    get inputPassword(){
        return $('#password');
    }
    get btnLogin(){
        return $('button[type="submit"]');
    }
    get errorMsg(){
        return $('div[role="alert"]');
    }
    async open(){
        await browser.url('/login')
    }
    async login(email, password){
       await this.inputEmail.setValue(email);
       await this.inputPassword.setValue(password);
       await this.btnLogin.click();
       await this.btnLogin.waitForDisplayed({ timeout: 5000 });
       await this.btnLogin.waitForExist({ timeout: 5000 });
    }
    async assertErrorMessage(ExpectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(ExpectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();