//Add and change HTML 
//Step 1 Create the element
//Step 2 Add attributes or properties
//Step 3 Append Element to DOM
//Remove HTML element

// Example 1 <h1>

//Step 1 Create the element
const newH1 = document.createElement("h1");

//Step 2 Add attributes or properties
newH1.textContent = "Welcome to our page"; //adding content
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//Step 3 Append Element to DOM
// document.body.append(newH1); //it will append the element to the body,
//when we append an element to a parent, it will be the last child
// document.body.prepend(newH1); //we prepend the element as first child
document.getElementById("box1").append(newH1); //we can append the h1 element to any previous element in the html document like this
// document.getElementById("box1").prepend(newH1); //we can prepend the h1 element to any previous element in the html document like this

//if we want to insert it before any element, we use indertBefore(newElement, currentElement)
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

//if the html elements don't have any id, we use querySelectorAll to select all the elements by their className
// const boxes = document.querySelectorAll(".box"); //it is a nodelist
// document.body.insertBefore(newH1, boxes[3]); //use index number for select specific element

//Remove HTML element
// document.body.removeChild(newH1); //it will remove the element from body
document.getElementById("box1").removeChild(newH1); //it will remove the element, when it is in amother element 