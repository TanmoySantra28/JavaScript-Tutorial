// this = it is a keyword. Reference to the object where 'this' is used.
//        (the obejct depends on the immediate context)
//  object.name = this.name;

const person1 = {
    name: "Moumoni",
    age: 20,
    sayHello: function(){
        // console.log(`Hello I'm ${name}`);
        /* This will throw a ReferenceError because name is not defined in the current scope. 
           JavaScript looks for name in the local or global scope, but it doesn't find it. 
           It does not implicitly refer to person1.name.*/
        console.log(`Hello I'm ${person1.name}`); //it will work, because, we're explicitly referencing the name property of the person1 object.
        console.log(`Hello I'm ${this.name}`); //it will work, because, this refers to the object person1, because sayHello is a method of person1.
    },
    sayAge: function(){
        console.log(`Age is ${this.age}`);
    }
}

const person2 = {
    name: "Tanmoy",
    age: 21,
    sayHello: function(){
        //As we are now in the context of person2 object. this refers to the object person2
        console.log(`Hello I'm ${this.name}`); 
    },
    sayAge: function(){
        console.log(`Age is ${this.age}`);
    },
    sayHi: () => console.log(`Hi ${this.name}`), //this won't work with arrow function, it will return a undefined.
}

person1.sayHello();
person1.sayAge();
person2.sayHello();
person2.sayAge();
person2.sayHi(); 