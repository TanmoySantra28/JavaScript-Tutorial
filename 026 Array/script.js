//array - a variable like structure that can hold more than one value

let fruits = ["apple", "banana", "orange"]; //initialize an array

console.log(fruits);    //prints the whole array
console.log(fruits[0]); //prints value at index 0
console.log(fruits[1]); //prints value at index 0
console.log(fruits[2]); //prints value at index 0

fruits[1] = "coconut";  //update the value at index 1
console.log(fruits);

fruits.push("berry");   //add the value to the end of the array
console.log(fruits);
fruits.pop();           //delete the value at end of the array
console.log(fruits);

fruits.unshift("mango");    //add value at the beginning
console.log(fruits);
fruits.shift();             //delete value at the beginning
console.log(fruits);

let n1 = fruits.length; //length() method returns the length of the array
console.log(n1);
let n2 = fruits.indexOf("orange");  //indexOf() method used to find the index of any value
console.log(n2);
let n3 = fruits.indexOf("pear");    //if the value isn't present, returns -1
console.log(n3);

//Traversing through an array
for ( let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
for (let j of fruits){
    console.log(j);
}

fruits.sort();           //sort the array alphabetically
console.log(fruits);
fruits.sort().reverse(); //sort the array reverse alphabetically
console.log(fruits);