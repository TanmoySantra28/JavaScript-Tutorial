const veges = ["PotaTo", "toMato", "cucumBEr", "caRRot"];
const vegesUpper = veges.map(upperCase);
const vegesLower = veges.map(lowerCase);

console.log(veges);
console.log(vegesUpper);
console.log(vegesLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
} 