// function expression = a way to define functions as values or variables
//      basically it is like assigning a function to variable or const
/*
    function declaration and function expression are different.
    function declaration = define a reusable block of code that performs a specific task.
*/

function hi(){          //function declaration
    console.log("Hi");
}

const hello = function(){   //function expression
    console.log('hello');
}

hi();
hello(); 