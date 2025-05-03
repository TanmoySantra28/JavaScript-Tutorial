//we can use the methods like forEach(), map() etc using arrow funcitons

const nums = [1,2,3,4,5,6];

const sqrs = nums.map( (element) => Math.pow(element, 2));
const cubes = nums.map( (element) => Math.pow(element, 3));
const evenNums = nums.filter( (element) => element % 2 === 0);
const oddNums = nums.filter( (element) => element % 2 !== 0);
const total = nums.reduce( (accumulator, element) => accumulator + element);


console.log(sqrs);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total); 