const nums = [1,2,3,4,5];

//we can use the methods like forEach(), map() like usual with a function declaration
const sqrs = nums.map(square);
console.log(sqrs);
function square(element){
    return Math.pow(element, 2);
}

//but instead we can use function expression
//We don't need to add function name necessarily, benefits of doing this is 
//we're not including the global namespace with function name when we need the function just once
const sqrs1 = nums.map(function (element){
    return Math.pow(element, 2);
});
console.log(sqrs1);

const cube = nums.map(function (element){
    return Math.pow(element, 3); 
});
console.log(cube);

//Similarly we can use filter method
const evenNums = nums.filter(function (element){
    return element % 2 === 0;
});
console.log(evenNums);

const oddNums = nums.filter(function (element){
    return element % 2 !== 0;
});
console.log(oddNums);

//Similarly we can use reduce method
const total = nums.reduce(function (accumulator, element){
    return accumulator + element;
});
console.log(total);