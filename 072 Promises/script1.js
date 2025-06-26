//we can wrap all the asynchronous code within a promise
//then we method chain the promises
//to achieve, at each function, we have to return an new Promise object

//sometimes in asynchronous function, depending upon the tasks, the task may fail
//for example say we couldn't locate a file, then using promises, we don't resolve that promise, instead we return reject
//that's what happens when an asynchronous function failed to do something

function cutVegies(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isCutVegies = true;

            if (isCutVegies) {
                resolve("You cut the Vegies"); 
                //if we want to print when the promise is resolved, use resolve parameter, it is also a function, the message the argument we are passing in
            } 
            else {
                reject("You didn't cut the Vegies");
                //if we want to print when the promise is rejected, use reject parameter, it is also a function, the message the argument we are passing in
            }
        },1500);
    }); //our promise will return somw value, it's either goining to be resolved or rejected
}

function cleanKitchen(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isCleanKitchen = false;

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

            const trashTakenOut = true;

            if (trashTakenOut) {
                resolve("You take out the trash");
            } 
            else {
                reject("You didn't take out the trash")    
            }
        },500);
    });
}

//to order these function, we use method chaining as we are using promises, instead of callbacks

//cutVegies() method return the message as, store it to value within the then() method and print it
//then return another function within the then() method and invoke the function
//use another then() method for doing the same
cutVegies().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
            .then(value => {console.log(value); console.log("All works finished")})
            .catch(error => console.error(error)); 
        //we need to use catch() method to print the reject message

//when one promise is rejected, next promises won't be attempted to resolve