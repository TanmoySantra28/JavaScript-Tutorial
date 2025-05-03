const ages = [15,20,21,21,56,17];
const Adults = ages.filter(isAdult);    //if the element is returning true, store it into this array
const Minors = ages.filter(isMinor);

console.log(ages);
console.log(Adults);
console.log(Minors);

function isAdult(element){
    return element >=18;    //if element is >=18 returns true
}
function isMinor(element){
    return element <18;
}