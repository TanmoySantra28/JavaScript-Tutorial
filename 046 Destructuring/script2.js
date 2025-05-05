//Example - destructure in function parameters

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

//means if any object doesn't have any property, we can set and assign the parameter, but if that property already presents, it remains unchanged
function displayPerson({fname, lname, age, job="none"}){   //using the {} we are destructuring the object
    console.log(`Name: ${fname} ${lname}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1); //passing an object as argument to the function
displayPerson(person2); //passing an object as argument to the function