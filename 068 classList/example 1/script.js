// classList = Element property in JavaScript 
//             used to interact with an element's list of classes (CSS classes)
//      Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle(Remove the class if present, Add the class if not)
// replace(oldClass, newClass)
// contains(), if the element contains a class, returns true, otherwise false

const myButton = document.getElementById("myButtons");

myButton.classList.add("enabled"); //adding the class "enabled" from css file to the element
myButton.classList.remove("enabled"); //remove() method will remove the class from the element

//when we hover over the element, add() method to add a class to the element, from css file
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover"); 
});
 
//when we leave hovering over the element, remove() method will remove the class
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover"); 
});
