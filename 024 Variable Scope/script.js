//Variable scope

let a = 99; //global scope variable a

function f1(){
    let x = 10; //local scope variable x
    console.log(x);
    console.log(a);
}
function f2(){
    let x = 15; //local scope variable x
    console.log(x);
    console.log(a);
}

f1();
f2();