//Async/Await = are 2 keywords
// Async = makes a function return a promise
// Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue


//a function can be declared with async, will return a promise
//the returned promise don't have resolve or reject, it is kind off like an empty promise, so it is meaningless,
//So we need to create a different async function and calling the asynchronous functions in synchronous order using Await
//async works with together await
//async function cutVegies(){...} (meaningless)
 function cutVegies(){ 

    // return new Promise(() => {...));  
    // there's no resolve or reject, it will throw uncaught reference error, to solve async must be used with await
    return new Promise((resolve, reject) => { 
        setTimeout(() => {

            const isCutVegies = true;

            if (isCutVegies) {
                resolve("You cut the Vegies"); 
            } 
            else {
                reject("You didn't cut the Vegies");
            }
        },1500);
    }); 
}

function cleanKitchen(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isCleanKitchen = true;

            if (isCleanKitchen) {
                resolve("You clean the kitchen");
            } 
            else {
                reject("You didn't clean the kitchen");
            }
        },2500);
    });
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if (trashTakenOut) {
                resolve("You take out the trash");
            } 
            else {
                reject("You didn't take out the trash")    
            }
        },500);
    });
}

//different async function to call the asynchronous functions in synchronous manner
async function doWorks(){
    
    try {
        const cutVegiesResult = await cutVegies();
        console.log(cutVegiesResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("All works done");
    } 
    catch (error) {
        console.error(error); //catch if any promises are rejected
    }
}

doWorks(); 