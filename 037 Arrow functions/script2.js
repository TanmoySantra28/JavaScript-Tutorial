//We can also pass the arrow funciton as a value

function hello(){       //function declaration
    console.log("hello");
}
setTimeout(hello,3000); //it will delay the 'hello' function's execution time by 3000ms

//instead we can directly use the function expression
setTimeout(function(){
    console.log("hi");  //here we use an entire function as an argument which is treated like a value
},5000);

//instead we can use a more concise arrow function

setTimeout( () => console.log("oi"), 7000); 