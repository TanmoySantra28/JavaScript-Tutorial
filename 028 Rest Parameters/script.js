//rest parameters - represente by ...
/*
    It allows a function with a variable number of arguments by bundling them into an array.
    spread - expands an array into separate elements.
    rest - bundles separate elements into an array.
*/

const food1 = "meat";
const food2 = "chicken";
const food3 = "fish";
const food4 = "egg";

//the rest parameter combine the arguments passing to the function into the array named foods
function Fridge(...foods){
    console.log(foods);
}
Fridge(food1, food2, food3, food4);

//after combining, we can separate the elements of the array using spread operator
function Fridge1(...foods){
    console.log(...foods);
}
Fridge1(food1, food2, food3, food4);

//we can return the array that we are creating using rest parameters
function Fridge2(...foods){
    return foods;
}
let f = Fridge2(food1, food2, food3, food4);
console.log(f);

//We can also combine strings
function combineName(...name){
    return name.join(" ");
}
let fname = combineName("Mr","Tanmoy","Santra");
console.log(fname);