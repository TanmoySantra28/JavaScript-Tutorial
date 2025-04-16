//function - a section of reusable code.
//Declare code once, use it whenever you want. Call the function to execute the code.

function hello(){   //definition
    console.log(`Hello`);
    console.log(`World`);
}
hello();    //calling
hello();    //we can call it as many time as we want

function nice(uname,age){ //parameterized function
    console.log(`Hello ${uname}, You're ${age} old`);
}
nice("Moumoni",20); //passing as arguments
nice("Tanmoy",21);

function add(x,y){
    // let res = x+y;
    // return res;
    return x+y;
}
let ans = add(5,6);
console.log(`Sum = ${ans}`);
console.log(`Sum = ${add(6,7)}`);

function isEven(num){
    return (num%2===0)?true:false;
}
console.log(isEven(12));
console.log(isEven(21));

function check(email){
    if(email.includes("@"))
        return true;
    else
        return false;
}
console.log(check("mb0609@gmail.com"));
console.log(check("ts2801gmail.com"));