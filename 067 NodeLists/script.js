//NodeList = Static collection of HTML elements by (id, class, element)
//           Can be created by using querySelectorA11()
//           Similar to an array, but no (map, filter, reduce) but have forEach()
//           NodeList won't update to automatically reflect changes, it's static

let buttons = document.querySelectorAll(".myButtons"); //returns a nodelist



//add html or css properties
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "🔵";
});

//add Click event listene0.r
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato"; //when we click bg color will change
    });
});

//Mouseover and Mouseout event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightgreen"; //when we hover bg color will change
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green"; //when we leave the button bg color will change
    });
}); 