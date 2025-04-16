//String Method = allow you manipulate and work with text (string) 
let uname = "Hello World";
let x;

x = uname.charAt(5);
console.log(x);

x = uname.indexOf("l");
console.log(x);

x = uname.lastIndexOf("l");
console.log(x);

x = uname.length;
console.log(x);

let s1 = " Abcd";
x = s1.trim();
console.log(x);

x = uname.toUpperCase();
console.log(x);

x = uname.repeat(3);
console.log(x);

x = uname.startsWith("H");
console.log(x);
x = uname.startsWith("M");
console.log(x);

x = uname.endsWith("d");
console.log(x);
x = uname.endsWith("t");
console.log(x);

x = uname.includes("d");
console.log(x);
x = uname.includes("a");
console.log(x);

x = uname.replace("l","#");
console.log(x);
x = uname.replaceAll("l","#");
console.log(x);

x = uname.padStart(20,"*");
console.log(x);

x = uname.padEnd(20,"*");
console.log(x);