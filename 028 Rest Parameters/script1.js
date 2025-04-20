//sum and average of 5 numbers using 2 different functions and use rest parameters
function sum(...numbers){
    let r=0;
    for(let n of numbers){
        r = r + n;
    }
    return r;
}
function avg(...numbers){
    let r=0,c=1;
    for(let n of numbers){
        r = r + n;
        c = c + 1;
    }
    return r/c;
}
let s = sum(5,6,7,8,9);
let a = avg(5,6,7,8,9);
console.log(`Sum = ${s}, Average = ${a}`);
