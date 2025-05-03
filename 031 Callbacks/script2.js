//You can pass callbacks as well as other arguments to a function

Sum(displayInPage, 5, 6);

function Sum(callback, a, b){
    let result = a+b;
    callback(result);
}

//to print the result in console
// function displayInConsole(res){
//     console.log(`Result = ${res}`);
// }

//to display the result in the page
function displayInPage(res){
    document.getElementById("myH1").textContent=`Result = ${res}`;
}