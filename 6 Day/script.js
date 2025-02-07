//Math = built-in object that provides a collection of properties and methods.

console.log(`Value of PI = ${Math.PI}`);
console.log(`Value of E = ${Math.E}`);

let a = 3.29;
let b = 2;
let c = 9;
let d = -3;
let z;

z = Math.round(a); 
console.log(`Rounded = ${z}`);

z = Math.floor(a);
console.log(`Floor = ${z}`);

z = Math.ceil(a);
console.log(`Ceil = ${z}`);

z = Math.trunc(a);
console.log(`Truncet = ${z}`);

z = Math.pow(c,b);
console.log(`Power = ${z}`);

z = Math.sqrt(b);
console.log(`Square Root = ${z}`);

z = Math.log(a);
console.log(`Logarithm = ${z}`);

z = Math.sin(a);
console.log(`Sin = ${z}`);

z = Math.cos(a);
console.log(`Cos = ${z}`);

z = Math.tan(a);
console.log(`Tan = ${z}`);

z = Math.abs(d);
console.log(`Absolute = ${z}`);

z = Math.sign(a);
console.log(`Sign of a = ${z}`);

z = Math.sign(d);
console.log(`Sign of d = ${z}`);
 
z = Math.sign(0);
console.log(`Sign of 0 = ${z}`);

z = Math.max(a,b,c,d);
console.log(`Max = ${z}`);

z = Math.min(a,b,c,d);
console.log(`Min = ${z}`);