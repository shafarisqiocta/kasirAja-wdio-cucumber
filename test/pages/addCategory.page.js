class AddCategoryPage{
    get inputNama(){
        return $('//input[@id="nama"]')
    }
    get inputDeskripsi(){
        return $('//input[@id="deskripsi"]')
    }
    get btnSave(){
        return $('//button[text()="simpan"]')
    }
    async open(){
        await browser.url('/categories/create')
    }

    async createCategory(nama,deskripsi){
       await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
        await this.btnSave.click();
    }
}

module.exports = new AddCategoryPage();
