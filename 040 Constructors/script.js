// constructor = special method for defining the properties and methods of objects.
// when we need to create a lot of objects, instead of creating the objects manually,
// we can use constructor to construct these objects manually.

//Car constructor is a reusable method where we can define the properties and methods of objects we will create
function Car(brand, model, year, colour){ //here we can have different parameters names as well.
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.colour = colour,
    this.drive = function(){    //we can also add an method to the constructor
        console.log(`You drive the ${this.brand} ${this.model}`);
    }
}

//to use this constructor, we will create an instance of an object
//new keyword is used to create an instance of an object that is defined by a constructor (or a class)
const car1 = new Car("hyundai","verna","2024","blue");
const car2 = new Car("volvo","s90","2024","blue");
const car3 = new Car("suzuki","alto","2021","white");

console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);
console.log(car1.colour);
car1.drive();

console.log(car2.brand);
console.log(car2.model);
console.log(car2.year);
console.log(car2.colour);
car2.drive();

console.log(car3.brand);
console.log(car3.model);
console.log(car3.year);
console.log(car3.colour);
car3.drive();