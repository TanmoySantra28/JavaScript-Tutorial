//Synchronous = Executes line by line consecutively in a sequential manner 
//              Code that waits for an operation to complete.
//Asynchronous = Allows multiple operations to be performed concurrently without waiting
//              Doesn't block the execution flow and allows the program to continue
//              (I/O operations, network requests, fetching data)
//              Handled with: Callbacks, Promises, Async/Await


//Synchronous
//these codes are executed one after another, we cannot jump into Task 2, without executing Task 1
//so here's a order of events that are following
console.log("Task 1");
console.log("Task 2");
console.log("Task 3"); 