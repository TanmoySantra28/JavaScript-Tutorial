//object = a collection of related properties and/or methods.
// It can represent real world objects (people, products, places)
/* Syntax:  object = {key: value,
                      function()}
*/
// here methods are just functions that belongs to an object
const person1 = {
    firstname: "Moumoni",   //object can has as many properties as we want
    lastname: "Bera",
    age: 20,
    isStudent: true,
    sayHello: function(){   //function expression
        console.log("Hello, I'm person 1");
    },
    colourLike: () => console.log("Blue"),  //areow function can also be used
}
const person2 = {           //object name must be different
    firstname: "Tanmoy",
    lastname: "Santra",
    age: 21,
    isStudent: true,
    sayHello: function(){   //function expression
        console.log("Hello, I'm person 2");
    },
    colourLike: () => console.log("Blue"),  //areow function can also be used
}

console.log(person1.firstname); //this is how we can access the objects properties
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isStudent);
person1.sayHello(); //this is how we access or call the method from the obejct
person1.colourLike(); 

console.log(person2.firstname); //this is how we can access the objects properties
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isStudent);
person2.sayHello(); //this is how we access or call the method from the obejct
person2.colourLike(); 