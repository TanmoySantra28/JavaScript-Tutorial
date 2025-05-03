//In JS, we can also pass a function as a value

function hello(){       //function declaration
    console.log("hello");
}
setTimeout(hello,3000); //it will delay the 'hello' function's execution time by 3000ms

//instead we can directly use the function expression
setTimeout(function(){
    console.log("hi");  //here we use an entire function as an argument which is treated like a value
},5000);
 