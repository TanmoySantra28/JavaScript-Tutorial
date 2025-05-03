const grades = [75, 50, 90, 80, 65, 95];

const maxElement = grades.reduce(getMax);
const minElement = grades.reduce(getMin);

console.log(maxElement);
console.log(minElement);

function getMax(prevElement, nextElement){
    return Math.max(prevElement, nextElement);
}
function getMin(prevElement, nextElement){
    return Math.min(prevElement, nextElement); 
}

/*  It is working like  Math.max(75,50) returns 75
                        Math.max(75,90) returns 90
                        Math.max(90,80) returns 90
                        Math.max(90,65) returns 90
                        Math.max(90,95) returns 95 
    So finally it returns 95
    (similarly for getMin, it returns the minimum value in such way)
*/