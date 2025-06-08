//nested objects = objects inside of other objects.
//  allows you to represent more complex data structures.
//  child object is enclosed by parent object.
//Eg. Person{Address{}, ContactInfo{}}, ShoppingCart{keyboard{}, mouse{}, monitor{}}

const person = {    
    fname: "Moumoni",
    age: 20,
    isStudent: true,
    eats: ["fries", "fastfood", "softdrinks"],  //object can store arrays
    address: {                  //object inside the object
        area: "rabindrapally",
        city: "kolkata",
        state: "WB"
    }
}

console.log(person.fname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.eats);   //to access the whole array
console.log(person.eats[1]);    //to get any particular element at the index
console.log(person.address.area);   //to access the any property with the nested object, we use the property accessor twice
console.log(person.address.city);
console.log(person.address.state);

//loop through the properties of a nested object.

for(const p in person.address){
    console.log(person.address[p]);
} 