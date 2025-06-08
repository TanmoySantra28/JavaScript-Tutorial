//Arrays of objects

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 125},
                {name: "coconut", color: "white", calories: 155},
                {name: "pineapple", color: "yellow", calories: 55},
]; //array of fruit objects, to create the '{}' is used
 
//to get any properties within the objects
console.log(fruits[1].name);
console.log(fruits[2].color);
console.log(fruits[4].name);

//---to insert new object to the array use push() method
fruits.push({name: "apple", color: "red", calories: 95});
console.log(fruits);

//---to remove any object use pop() method
fruits.pop();   //removes the last added
console.log(fruits);

//---splice() method will remove element at certain indices
fruits.splice(1,2);
console.log(fruits);

//---forEach() method to loop through the elements of that array
fruits.forEach(fruit => console.log(fruit));    //prints the objects
fruits.forEach(fruit => console.log(fruit.name));   //prints any properties of the objects
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

//---map() mehtod will run each element through an function and return an array

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//---filter() mehtod will return a new array after using each element and checking a condition

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

//---reduce() method will return a single object 

// max (accumulator) keeps track the greatest value during each iteration
const maxCalFruit = fruits.reduce((max, fruit) => 
                                    fruit.calories > max.calories ? fruit : max);
//means if the next fruit is greater than the previous max, then using ternary operator return fruit, otherwise return max
//similarly for fruit with minimum value
const minCalFruit = fruits.reduce((min, fruit) => 
                                    fruit.calories < min.calories ? fruit : min);

console.log(maxCalFruit);
console.log(minCalFruit);