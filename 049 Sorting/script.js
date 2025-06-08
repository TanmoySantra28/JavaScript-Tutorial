// sort() - method is used to sort elements of an array in place.
//      Sorts elements as strings in lexicographic order, not alphabetical.
//      lexicographic = (alphabet + number + symbols) as strings


//only just alphabetical characters
let fruits = ["apple","orange","banana","coconut","pineapple"];
fruits.sort(); //sort method treats the elements as strings
console.log(fruits);

let numbers = [9,2,1,4,6,7,10,8,5,3];
numbers.sort(); //sort the array lexicographically not, numerically
console.log(numbers);

//to sort numerically, we have to use custom comparision function
numbers.sort((a,b) => (a-b)); //ascending order
console.log(numbers);
numbers.sort((a,b) => (b-a)); //descending order
console.log(numbers);

//we can sort objects by given property
const people = [{name:"Alice", age:20, gpa:3.8},
                {name:"Bob", age:22, gpa: 3.6},
                {name:"Charlie", age:19, gpa: 3.9}];
people.sort((a,b) => (a.age-b.age)); //ascending by age
console.log(people);

people.sort((a,b) => (b.gpa-a.gpa)); //descending by gpa
console.log(people);


people.sort((a,b) => (b.name-a.name)); //if we sort strings, it won't work
//instead we use localeCompare() method within sort()
people.sort((a,b) => a.name.localeCompare(b.name)); //this method will check 2 strings in lexicographic order
console.log(people);
people.sort((a,b) => b.name.localeCompare(a.name)); //to reverse lexicographic order
console.log(people);
