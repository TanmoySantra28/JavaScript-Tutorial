const myButton = document.getElementById("myButtons");

// toggle(Remove the class if present, Add the class if not)

//when we hover over the element, toggle() method will add the "hover" class as it is not present
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover"); 
});

//when we leave hovering over the element, toggle() method will remove the "hover" class as it is present
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover"); 
});

myButton.classList.add("enabled"); // we added "enabled" class to the element

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled","disabled"); // replace(oldClass, newClass),  replacing the old class with new class
});

