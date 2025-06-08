//example

class Person{
    constructor(name, age, ...address ){    //spresd operator (...)
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //spread operator to spread the Address object
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Moumoni", 20, "rabindrapally", "kolkata", "India");
const person2 = new Person("Tanmoy", 21, "saltlake", "kolkata", "India");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);   //it will return Address object
//to access any particular property within the object
console.log(person1.address.city);