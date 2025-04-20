//spread operator - represented by ...
/*
    It allows iterable such as an array or string to be expanded into separate elements.
    (unpack the elements)
*/

let num = [1,2,3,4,5,8,6];
let maximum = Math.max(num);  //will return NaN, as the array to packed
console.log(maximum);
let maximum1 = Math.max(...num);  //will return the maximum element, as the array is unpacked using spread operator
console.log(maximum1);

let minimum = Math.min(num);  //will return NaN, as the array to packed
console.log(minimum);
let minimum1 = Math.min(...num);  //will return the minimum element, as the array is unpacked using spread operator
console.log(minimum1);

let uname = "Tanmoy";   
let letters = [...uname];   //strings can be separated and store it to an array
console.log(letters);

let letters1 = [...uname].join();  //using the join() method, unpacked array can be joined.
console.log(letters1);
let letters2 = [...uname].join("-"); //add - between the letters
console.log(letters2);

let fruits = ["apple", "berry", "melon"];
let nfruits = [...fruits];  //we can create a shallow copy using the spread operator
console.log(fruits);
console.log(nfruits);

let veges = ["tomato", "pea", "onion"];
let total = [...fruits, ...veges];   //we can combine two strings identically
console.log(total);

let ntotal = [...fruits, ...veges, "potato", "beans"];  //along with combining, new elements can also be added
console.log(ntotal);