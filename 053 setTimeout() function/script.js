// setTimeout() = funciton in js that allows you to schedule the execution
//      of a function after an amount of time (ms)
//  Times are approximate (varies based on the workload of the js runtime env.)
//  setTimeout(callback, delay);

function sayHello(){
    window.alert("hello");
}
setTimeout(sayHello, 3000); //the window alert will be shown after 3 seconds

//works with anonymous function too
setTimeout(function(){window.alert("hi")},6000);
//also works with arrow function
setTimeout(() => window.alert("hola"),9000);

//clearTimeout(timeoutId) = can cancel the timeout before it triggers
const timeoutId = setTimeout(() => window.alert("hii"),12000);
clearTimeout(timeoutId); //means after 12 sec the timeout will cancel out, nothing will be printed
 