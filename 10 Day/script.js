//Ternary operator

let age = 20;
let m = age >= 18 ? `Adult` : `Minor`;
console.log(m);

let time = 10;
let b = time < 12 ? `AM` : `PM`;
console.log(b);

let isStudent = true;
let t = isStudent ? `Is student` : `Is not student`;
console.log(t);

let amount = 1500;
let d = amount > 1000 ? 15 : 0;
console.log(`Total is Rs. ${amount - (amount * (d/100))}`);