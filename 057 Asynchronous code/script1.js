//Asynchronous

setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

//Tasks 2,3,4 will execute first then, Task 1, because setTimeout is one of the asynchronous function 