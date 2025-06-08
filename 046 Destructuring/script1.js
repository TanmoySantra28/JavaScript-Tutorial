//Example - extract values from objects

const person1 = {
    fname: "Moumoni",
    lname: "Bera",
    age: 20,
    job: "student"
}
const person2 = {
    fname: "Tanmoy",
    lname: "Santra",
    age: 21,
}
//to extract values from objects, we use {} for destructuring
const {fname, lname, age, job="student"} = person2; //we can set default values when we use destructuting
//means if any object doesn't have any property, we can set and assign the identifier, but if that property already presents, it remains unchanged
console.log(fname);
console.log(lname);
console.log(age);
console.log(job);
 