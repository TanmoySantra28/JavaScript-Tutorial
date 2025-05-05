//super = keyword is used in classes to call the constructors or
//  access the properties and methods of a parent (superclass)
//  this = refers to - this object
//  super = refers to - the parent of that object 

class Animal{
    constructor(){

    }
} 
class Fish extends Animal{  //to use inheritance 'extend' keywprd is used
    constructor(name, age, runSpeed){
        super();    //we must call super constructor in derived class before accessing 'this', otherwire it will throw an error
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}
class Bird extends Animal{  //to use inheritance 'extend' keywprd is used
    constructor(name, age, flySpeed){
        super();
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
    
}
class Snake extends Animal{  //to use inheritance 'extend' keywprd is used
    constructor(name, age, crawlSpeed){
        super();
        this.name = name;
        this.age = age;
        this.crawlSpeed = crawlSpeed;
    }
}

//to access the class we have to create object instances using new
const fish = new Fish("Pomfret",1,15);
const bird = new Bird("Parrot",2,30);
const snake = new Snake("Python",3,9);

console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);

console.log(bird.name);
console.log(bird.age);
console.log(bird.flySpeed);

console.log(snake.name);
console.log(snake.age);
console.log(snake.crawlSpeed);