//Type Conversion

let x = "abc";
let y = "abc";
let z = "abc";
console.log(typeof x, typeof y, typeof z);
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let a,b,c;
console.log(a,b,c);
a = Number(a);
b = String(b);
c = Boolean(c);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let age = window.prompt("Enter age = ");
age += 1;
console.log(age);
age = Number(age);
age +=1;
console.log(age);