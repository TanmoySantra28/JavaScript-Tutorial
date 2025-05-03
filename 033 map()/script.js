// .map() = accepts a callback and applies that function to each element of an array, then return a new array.
// main diff between forEach() and map() is, forEach() returns the same array, but map() returns a new array after compilation.

const nums = [1,2,3,4,5];
const sqrs = nums.map(square);
const cubes = nums.map(cube);

console.log(nums);
console.log(sqrs);
console.log(cubes);

function square(element){
    return Math.pow(element, 2); 
}

function cube(element){
    return Math.pow(element, 3);
}