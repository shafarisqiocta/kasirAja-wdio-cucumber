
class DashboardPage{
    get DashboardPageUrl(){
        return 'https://kasirdemo.vercel.app/dashboard';
    }
    get categoryMenu(){
        return $('//div[text()="kategori"]');
    }
    get customerMenu(){
        return $('//div[text()="pelanggan"]')
    }
    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.DashboardPageUrl)
    }
    async navigateToCategory(){
        await this.categoryMenu.click();
    }
    async navigateToCustomer(){
        await this.customerMenu.click();
    }
    async open(){
        await browser.url(this.DashboardPageUrl);
    }

}

module.exports = new DashboardPage();