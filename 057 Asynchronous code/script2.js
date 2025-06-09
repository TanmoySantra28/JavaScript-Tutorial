//Callbacks are also asynchronous

function func1(callback){ //function containing callback and asynchronous task
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}

function func2(){ //function containing synchronous tasks
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2); //func2 is passing as callback, so after 3sec the Task 1 will be displayed, then other tasks will be displayed. 