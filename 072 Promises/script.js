//Promise = An Object that manages asynchronous operations.
//      (such as querying a database, fetching a file, gathering resources etc)
//  Wrap a Promise Object around {asynchronous code}
//  "I promise to return a value"
//  PENDING -> RESOLVED or REJECTED
//new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER
// 1. CUT THE VEGIES
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

//using callbacks, (without using promises)

function cutVegies(callback){
    setTimeout(() => {
        console.log("You cut the Vegies");
        callback();
    },1500);
}
function cleanKitchen(callback){
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    },2500);
}
function takeOutTrash(callback){
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    },500);
}
//to order these fucntions we use callback hell
cutVegies(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("All works completed");
        });
    });
}); 

//to avoid callback hell, we can use promises