//To use callback, pass the second function as an argument of the first function
//There won't be any parenthesis with that function written as parameter

hello(bye);
Namaskar();
Leave();
// hello --> bye --> Namaskar --> Leave

function hello(callback){
    console.log("Hello");
    callback();
}
function Namaskar(){
    console.log("Namaskar");
}
function Leave(){
    console.log("Leave");
}
function bye(){
    console.log("Bye");
}