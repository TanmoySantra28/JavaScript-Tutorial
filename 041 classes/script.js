/* class = It is an ES6 feature. 
   Provides a more structured and cleaner way to work with objects compared to traditional constructor functions. 
   Eg. static keyword, encapsulation, inheritance etc.
*/
/*  
    ES6, also known as ECMAScript 2015, represents a significant update to JavaScript, 
    introducing features designed to enhance code readability, maintainability, and functionality. 
    Released in 2015, it standardized many capabilities previously addressed through libraries or workarounds.
*/

//class is going to serve as a blue print, object is product
class Product{
    //a class cannot have more than one constructor
    constructor(name, price){   //to use the constructor within a class use constructor keyword
        this.name = name;
        this.price = price;
    }

    // to create a function inside a class we don't need to use the function keyword
    displayProduct(){
        console.log(`Product is ${this.name}`);
        console.log(`Price is Rs.${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){   //we can also use the function with return type
        return this.price + (this.price * salesTax);
    }
}

const Tax = 0.05;
let total;

//creating some instance of objects using new keyword
const product1 = new Product("Oats",199);
const product2 = new Product("Muesli",499);
const product3 = new Product("Cashew",299);

console.log(product1.name);
console.log(product1.price);
product1.displayProduct();
total = product1.calculateTotal(Tax); //we are passing the Tax as argument to the calculateTotal method inside the Product class
console.log(`Total is = ${total.toFixed(2)}`);

console.log(product2.name);
console.log(product2.price);
product2.displayProduct();
total = product2.calculateTotal(Tax);
console.log(`Total is = ${total.toFixed(2)}`);

console.log(product3.name);
console.log(product3.price);
product3.displayProduct();
total = product2.calculateTotal(Tax);
console.log(`Total is = ${total.toFixed(2)}`);