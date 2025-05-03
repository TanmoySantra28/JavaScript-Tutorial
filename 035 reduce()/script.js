// .reduce() = reduce the elements of an array to a single value
// function functionName (accumulator, element){...}
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`Total = ${total.toFixed(2)}`);

function sum(prevElement, nextElement){
    return prevElement + nextElement;
}
// it is working like   5+30 = 35, 
//                      35+10 = 45, 
//                      45+25 = 70, 
//                      70+15 = 85, 
//                      85+20 = 105 returns  