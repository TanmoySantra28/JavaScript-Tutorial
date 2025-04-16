//Logical operators

//AND - both the conditions have to be true, then return True
let temp = 25;
if(temp>0 && temp<=30){
    console.log("Good");
}
else{
    console.log("Bad");
}

//OR - either of the conditions have to be true, then return True
if(temp<=0 || temp>=30){
    console.log("Bad");
}
else{
    console.log("Good");
}

//NOT - it flips the true to false, and vice versa.
const isSunny = true;
if(isSunny){
    console.log("Is Sunny");//if statement is true, will execute
}
else{
    console.log("Is Cloudy");
}

if(!isSunny){
    console.log("Is Cloudy");//if statement is false, will execute
}
else{
    console.log("Is Sunny");
}