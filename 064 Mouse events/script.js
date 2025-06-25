//eventListener = listen for specific events to create interactive web pages
//                an element can have more than one eventListeners
//      Events: click, mouseover, mouseout etc.
//      .addEventListener( event, callback) or,
//      .addEventListener( event, anonymous function) or,
//      .addEventListener( event, arrow function)

const myBox = document.getElementById("myBox");

//function to change the color, parameter will be event
//event is an object, it is provided to us by the web browser when something happened, like i click on something
//event contains informations about somethinng that happens
function changeColor(event){ 
    console.log(event); //it will be a pointerEvent, when we click on the box
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕";
}

//when we click on the myBox, it will trigger the changeColor function, as it is the callback
myBox.addEventListener("click", changeColor); //we don't need to pass event object here as argument.
 
//we don't neccessarily pass an callback, we can pass an anonymous function or an arrow function
//mouseout means when we hover the cursor over the element,  it will trigger the arrow function
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "I said No 😰";
});

//when we leave hovering over the element, mouseout event will work
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Don't Click it 🤨";
});

/*
click = when we click the box,
mouseover = when we hover the cursor over the box,
mouseout = when we leave hovering over the box 
*/