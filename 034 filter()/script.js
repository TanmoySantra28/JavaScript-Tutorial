// .filter() = creates a new array by filtering out elements

let nums = [1,2,3,4,5,6,7,8,9,10];
let evenNums = nums.filter(isEven);
let oddNums = nums.filter(isOdd);

console.log(nums);
console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;   //if the function returns true, the element will be stored in the new array
}                               //filtering out the elements that returns false

function isOdd(element){
    return element % 2 !== 0;   //if the function returns true, the element will be stored in the new array
}
