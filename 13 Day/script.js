//string slicing

const fullname = "Tanmoy Santra";
console.log(fullname);
let firstname = fullname.slice(0,6);
console.log(firstname);
let lastname = fullname.slice(7,13);
console.log(lastname)
let lastname1 = fullname.slice(6 + 1);
console.log(lastname1)
let firstchar = fullname.slice(0,1);
console.log(firstchar);
let lastchar = fullname.slice(-1);  //backward count
console.log(lastchar);
let lastchar1 = fullname.slice(12,13);
console.log(lastchar1)
let lasttwochar = fullname.slice(-2);
console.log(lasttwochar)

let email = "tanmoy28@gmail.com";
let username = email.slice(0,email.indexOf("@"));
console.log(`Username = ${username}`);
let extension = email.slice(email.indexOf("@") + 1);
console.log(`Extension = ${extension}`);