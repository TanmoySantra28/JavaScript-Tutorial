//Basic Calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); //eval() function takes an expression like 1+2+3 and evaluates it, 
        //it is less secure. if eval() is used with untrusted input, it can execute malicious code, leading to vulnerabilities like code injection
        //it should not be used.
    }
    catch(error){
        display.value = "Error";
    }
} 