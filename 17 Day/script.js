//while loop = repeat some code 'while' some condition is true

// let username = "";
// while(username === "" || username === null){
//     username = window.prompt("Enter username = ");
// }
// console.log(`Hello ${username}`);

//do while loop = same as while but 'do' portion will execute atleast once, then while condition will be checked

let username;
do{
    username = window.prompt("Enter your name = ");
}
while(username === "" || username === null);
console.log(`Hello ${username}`);
