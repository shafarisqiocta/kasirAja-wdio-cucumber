class CategoryPage{
    get addBtn(){
        return $('//a[text()="tambah"]')
    }
    get successMsg(){
        return $('.chakra-alert__title')
    }
    async open(){
        await browser.url('/categories')
    }
    async clickAddBtn(){
        await this.addBtn.click();
    }
    async assertSuccessMsg(ExpectedSuccessMessage){
        await expect(this.successMsg).toHaveTextContaining(ExpectedSuccessMessage);
    }
    async getSuccessMsg(){
        return this.successMsg.getText();
    }
}

module.exports = new CategoryPage();
