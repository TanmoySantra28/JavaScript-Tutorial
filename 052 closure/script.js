//closure = a function defined inside of another function,
//  the inner function has access to the variables and scope of the outer function.
//  Allow for private variables and state maintenance
//  Used frequently in JS frameworks: React, Vue, Angular

function outer(){
    let m ="hello"; //m can't be acces outside the scope
    function inner(){
        console.log(m);
    }
    inner();//it will print 'hello' as, inner function can access the m variable of outer function.
}
outer();    
//If we don't call the inner() function, within scope of the outer funciton,
//it will print nothing, as printing statement is in inner function and outer function can't access it.
//If we call the inner() within scope of the outer function, then output will be shown.

//here 'm' variable is different than the 'm' within the closure, as that was is in diff scope and private.
let m = "goodbye";
console.log(m); 