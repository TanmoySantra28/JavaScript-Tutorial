//JSON = (JavaScript Object Notation) data-interchange format
//      Used for exchanging data between a server and a web application
//      JSON formats can be objects or array like or both(objects including arrays or array of objects)
//      JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a one long JSON string.
// JSON.parse() = converts a JSON string to a JS object

const names = ["John", "Mary", "David", "Smith"];
const person = {"name":"Jane", "age": 32, "isEmployed": true, "hobbies": ["cooking", "singing", "sewing"]};
const people = [{"name":"Jane", "age": 32, "isEmployed": true},
                {"name":"Mary", "age": 30, "isEmployed": true},
                {"name":"David", "age": 16, "isEmployed": false},
                {"name":"Smith", "age": 35, "isEmployed": true}];

//JSON is an built-in object used for work with json

const jsonString = JSON.stringify(names); //stringify the array
const jsonString1 = JSON.stringify(person); //stringify the object
const jsonString2 = JSON.stringify(people); //stringify the array of objects

 
console.log(jsonString); //it will print one long json string
console.log(jsonString1); //it will print one long json string
console.log(jsonString2); //it will print one long json string
