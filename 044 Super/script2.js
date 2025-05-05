//we can also access methods from parent class using super

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at ${speed}`);
    }
}
class Fish extends Animal{ 
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    swim(){
        console.log(`The ${this.name} can swim`);
        super.move(this.runSpeed);  //super keyword is used to call or access the methods in parent class (superclass)
    }
}
const fish = new Fish("Pomfret",1,15);
console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
fish.swim(); 