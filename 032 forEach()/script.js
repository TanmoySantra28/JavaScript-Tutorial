// forEach() = method used to iterate over the elements of an array and 
//              apply a specified function (callback) to each element.
// it is usefull when we need to apply a function to the each elements of the array
/*  
    array.forEach(callback)
    element, index, array are provided.
*/

let nums = [1,2,3,4,5];

nums.forEach(display);
nums.forEach(double);
nums.forEach(display);
nums.forEach(triple);
nums.forEach(display);
nums.forEach(square);
nums.forEach(display);
nums.forEach(cube);
nums.forEach(display);

function display(element){
    console.log(element); 
}

function double(element, index, array){ //double the elements
    array[index] = element * 2;
}

function triple(element, index, array){ //triple the elements
    array[index] = element * 3;
}

function square(element, index, array){ //square the elements
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){ //cube the elements
    array[index] = Math.pow(element, 3);
}