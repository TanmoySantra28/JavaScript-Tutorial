//destructuring = extract values from arrays and objects, 
//        then assign them to variables in a convenient way
//  [] = to perform array destructuring
//  {} = to perform object destructuring

//Example - swap values of 2 variables

let a = 10;
let b = 20;
[a, b] = [b, a];  //left side we are using destructuring and right side we are creating an array
console.log(a);
console.log(b);

//Example - swap two elements in an array

const fruits = ["pear", "mango", "litchi", "melon", "orange"];
//we are swaping pear with orange, left side = destrcturing,  right side = array
[fruits[0],fruits[4]] = [fruits[4],fruits[0]];
//we are swaping mango with litchi
[fruits[1],fruits[2]] = [fruits[2],fruits[1]];
console.log(fruits); 

//Example - assign array elements to variables

const fruits1 = ["pear", "mango", "litchi", "melon", "orange"];
//here we assigning array elements to variables (eg. firstFruit, secondFruit etc.)
//and using ...(3 dots) we are assigning the remaining fruits to a new array
const [firstFruit, secondFruit, thirdFruit, ...extraFruits ] = fruits1;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);
console.log(extraFruits);