//inheritance = allows a new class to inherit properties
//  and methods from an existing class (parent -> child)
//It helps with code reusability.

class Animal{
    alive = true;

    Eat(){
        console.log(`The ${this.name} is eating`);
    }
    Sleep(){
        console.log(`The ${this.name} is sleeping`);
    }
}

class Fish extends Animal{  //to use inheritance 'extend' keywprd is used
    name = "fish";
    //child classes can have their own properties and methods as well
    swim(){
        console.log(`This ${this.name} can swim`);
    }
}
class Bird extends Animal{  //to use inheritance 'extend' keywprd is used
    name = "bird";
    fly(){
        console.log(`This ${this.name} can fly`);
    }
}
class Snake extends Animal{  //to use inheritance 'extend' keywprd is used
    name = "snake";
    crawl(){
        console.log(`This ${this.name} can crawl`);
    }
}

//to access the class we have to create object instances using new
const fish = new Fish();
const bird = new Bird();
const snake = new Snake();

//using inheritance we can use parent class's properties and methods instead of writing it in each child class
console.log(fish.alive);
fish.Eat();
fish.Sleep();
fish.swim();

console.log(bird.alive);
bird.Eat();
bird.Sleep();
bird.fly();

console.log(snake.alive);
snake.Eat();
snake.Sleep();
snake.crawl();