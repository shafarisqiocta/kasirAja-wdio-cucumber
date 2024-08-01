class AddCustomerPage{
    get inputNama(){
        return $('//input[@id="nama"]')
    }
    get inputNomorHp(){
        return $('//input[@id="no.hp"]')
    }
    get inputAlamat(){
        return $('//input[@id="alamat"]')
    }
    get inputKeterangan(){
        return $('//input[@id="keterangan]')
    }
    get btnSave(){
        return $('//button[text()="simpan"]')
    }
    async open(){
        await browser.url('/customers/create')
    }
    async createCustomer(nama,nomorhp,alamat,keterangan){
        await this.inputNama.setValue(nama);
        await this.inputNomorHp.setValue(nomorhp);
        await this.inputAlamat.setValue(alamat);
        await this.inputKeterangan.setValue(keterangan);
        await this.btnSave.click();
    }
}

module.exports = new AddCustomerPage();