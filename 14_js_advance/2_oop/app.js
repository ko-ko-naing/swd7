//object

let iPhone12 = {


    model : "iPhone12",//property
    rom : 64,
    color : ["blue","black","white","red"],
    isWaterProof : true,
    ram : 4,
    screen : 5.4,

    //methods
    fullSpec(){
        return this.model+" has "+this.ram+" GB RAM and "+this.storage+" GB storage and available in "+this.color.length+" colors such as "+this.color.join(",")
    }

}


let iPhone12Pro = {


    model : "iPhone 12 Pro",//property
    rom : 128,
    color : ["Gold","Sliver","Midnight Green","Graphite"],
    isWaterProof : true,
    ram : 6,
    screen : 5.4,

    //methods
    fullSpec(){
        return this.model+" has "+this.ram+" GB RAM and "+this.storage+" GB storage and available in "+this.color.length+" colors such as "+this.color.join(",")
    }

}

let iPhone12ProMax = {


    model : "iPhone 12 Pro Max",//property
    rom : 128,
    color : ["Gold","Sliver","Midnight Green","Graphite"],
    isWaterProof : true,
    ram : 6,
    screen : 6.4,

    //methods
    fullSpec(){
        return this.model+" has "+this.ram+" GB RAM and "+this.storage+" GB storage and available in "+this.color.length+" colors such as "+this.color.join(",")
    }

}



