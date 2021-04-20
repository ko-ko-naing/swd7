class Animal {

    type = "warm blooded";
    legs = 4;


}

class Dog extends Animal{

    skill(){
        console.log("Dog can run fast");
    }

}

class MalLone extends Dog{

    name = "Mg Mal Lone";

    skill(){
        console.log(this.name+" can run fast");
    }

}

class Cat extends Animal{



}