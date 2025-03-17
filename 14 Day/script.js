//Method chaining

let username = window.prompt("Enter your name = ");

//without method chaining

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let remaining = username.slice(1);
// remaining = remaining.toLowerCase();
// username = letter + remaining;

// console.log(username);

//with method chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);