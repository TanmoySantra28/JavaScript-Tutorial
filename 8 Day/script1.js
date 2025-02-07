const input1 = document.getElementById("myage");
const mysubmit = document.getElementById("mysubmit");
const printhere = document.getElementById("printhere");
let age;

mysubmit.onclick = function() {
    age = Number(input1.value);
    if (age > 100){
        printhere.textContent=`Too old, Age is more than 100`;
    }
    else if (age >= 18){
        printhere.textContent=`Eligible`;
    } 
    else if (age == 0){
        printhere.textContent=`Age can't be 0`;
    }
    else if (age > 0){
        printhere.textContent=`Minor, Age is 18-`;
    }
    else{
        printhere.textContent=`Age can't be negative`;
    }
}