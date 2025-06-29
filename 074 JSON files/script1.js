// JSON.parse()

//These are JSON strings
const names = `["John", "Mary", "David", "Smith"]`;
const person = `{"name":"Jane", "age": 32, "isEmployed": true, "hobbies": ["cooking", "singing", "sewing"]}`;
const people = `[{"name":"Jane", "age": 32, "isEmployed": true},
                {"name":"Mary", "age": 30, "isEmployed": true},
                {"name":"David", "age": 16, "isEmployed": false},
                {"name":"Smith", "age": 35, "isEmployed": true}]`;

//JSON.parse() to convert the json string into JS object
const parsedData = JSON.parse(names);
console.log(parsedData);

//We can fetch JSON files using fetch() method
//fetch() returns a promise, then we will get an response object, then convert into json format
//response.json also return a promise, then we will get the value
fetch("person.json")
     .then(response => response.json())
     .then(value => console.log(value))
     .catch(error => console.log(error)); //we should a catch in case the json file cannot be fetched
     
fetch("names.json")
     .then(response => response.json())
     .then(value => console.log(value))
     .catch(error => console.log(error));

//to iterate through all the objects we can use built-in forEach() method
fetch("people.json")
     .then(response => response.json())
     .then(values => values.forEach(value => {
         console.log(value.age); //print any particular key values
     }))
     .catch(error => console.log(error));
 