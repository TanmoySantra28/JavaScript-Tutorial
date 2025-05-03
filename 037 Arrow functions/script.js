// arrow function = a concise way to write function expressions, good for simple functions that you use only once 
// Syntax: (parameters) => some code

//function declaration
function hello(){
    console.log('hello');
}
hello();

//function expression
const hi = function(){
    console.log('hi');
}
hi();

//arrow function
const oi = () => console.log('oi');
oi(); 