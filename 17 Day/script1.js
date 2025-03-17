// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter the name = ");
//     password = window.prompt("Enter the password = ");

//     if(username === "Tanmoy" && password === "tanmoy28"){
//         loggedIn = true;
//         console.log("Logged in successfully");
//     }
//     else{
//         console.log("Invalid credential");
//     }
// }


let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter the name = ");
    password = window.prompt("Enter the password = ");

    if(username === "Tanmoy" && password === "tanmoy28"){
        loggedIn = true;
        console.log("Logged in successfully");
    }
    else{
        console.log("Invalid credential");
    }
}
while(!loggedIn);