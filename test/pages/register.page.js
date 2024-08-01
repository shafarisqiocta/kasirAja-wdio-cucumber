class RegisterPage{
    get inputNamaToko(){
        return $('#name');
    }
    get inputEmail(){
        return $('#email');
    }
    get inputPassword(){
        return $('#password');
    }
    get buttonRegister(){
        return $('.chakra-button.css-1n8i4of');
    }
    get successMsg(){
        return $('.success-message-class');
    }
    get errorMsg(){
        return $('.chakra-alert css-qwanz3');
    }

    open(){
        browser.url('/register')
    }

    async register(name,email,password){
       await this.inputNamaToko.setValue(name);
        await this.inputEmail.setValue(email);
       await this.inputPassword.setValue(password);
        await this.buttonRegister.click();
        await this.buttonRegister.waitForExist({ timeout: 5000 });
        await this.buttonRegister.waitForDisplayed({ timeout: 5000 });

    }
    async assertSuccessMessage(ExpectedSuccessMessage){
        await expect(this.successMsg).toHaveTextContaining(ExpectedSuccessMessage);
    }
    async getSuccessMessage(){
        return this.successMsg.getText();
    }
    async assertErrorMessage(ExpectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(ExpectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new RegisterPage();

