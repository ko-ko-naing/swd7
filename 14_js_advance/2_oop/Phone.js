class Phone {

    constructor(model,ram,rom) {
        this.model = model;
        this.ram = ram;
        this.rom = rom;
    }

    fullSpec(){
        console.log(` ${this.model} has  ram ${this.ram} GB and rom ${this.rom} GB`);
    }

}

let phone12 = new Phone("iphone12",4,64);
let phone12Pro = new Phone("iphone 12 Pro",6,128);
let phone12ProMax = new Phone("iphone 12 Pro Max",6,512);
