//Errors can occur often with user input

try{
    const dividend = Number(window.prompt("Enter a dividend = "));
    const divisor = Number(window.prompt("Enter a divisor = "));

    if(divisor == 0){ 
        throw new Error("You can't divide by zero"); //we can intentionally generate error,  when the divisor is 0
    }

    if(isNaN(dividend) || isNaN(divisor)){  //generating an error, when the entered value is not a number
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor; //In js, if divisor is 0, result will be infinity
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("Program is ended"); 