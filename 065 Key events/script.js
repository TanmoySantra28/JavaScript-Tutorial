//eventListener = listen for specific events to create interactive web pages
//                an element can have more than one eventListeners
//  Events: keydown (when we press down a key), keyup (when we release a key), keypress (keypress is not compatible with many browsers, so avoid it)
//  document.addEventListener(event, callback)

const myBox = document.getElementById("myBox");

//we can use callback to a function, anonymous function, arrow function as per our choice
//to fire keydown event
document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`); //it will show the key
    myBox.textContent = "🚖";   //when we press or hold any key, the element will change
    myBox.style.backgroundColor = "lightcoral";
});

//to fire keyup event
document.addEventListener("keyup", event => {
    console.log(`Key up = ${event.key}`); //it will show the key
    myBox.textContent = "🚕";   //when we release that key, element will be like this
    myBox.style.backgroundColor = "lightblue";
}); 