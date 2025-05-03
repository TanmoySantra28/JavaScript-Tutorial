//callback - a function that is passed as an argument to another function.
/*  Used to handle asynchronous operations:
    1. reading a file,
    2. network requests,
    3. interacting with databases.
*/

// No callback used, so if the first function takes more time to execute, 2nd function will execute first.
hello();
bye();

function hello(){
    setTimeout(function(){
        console.log("Hello");
    },3000);    //it will take 3000ms to execute
    
}
function bye(){
    console.log("Bye"); //so this will execute first
}

