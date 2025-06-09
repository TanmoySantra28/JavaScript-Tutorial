//errors can be generated for these issues
//  1. network errors, 
//  2. promise rejection, 
//  3. security errors
//when we encounter a problem when doing one of these things,  an error object will be generated and it interrupts our program

//we need to handle these errors, using 
// try {} = Encloses code that might potentially cause an error
// catch {} = Catch and handle any thrown Errors from try { }
// finally {} = (optional) Always executes. Used mostly for clean up
//      ex. close files, close connections, release resources

try{
    console.log(x);
}
catch(error){ //if we got an error, catch will be executed
    // console.log(error);
    console.error(error);
}
finally{
    console.log("This always executes");
}
 
console.log("End of program"); //now even though we got an error, but still we reach into the end of the program