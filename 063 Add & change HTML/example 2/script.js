//Add and change HTML 

//Example <li>

//Step 1 Create the element
const newListItem = document.createElement("li");

//Step 2 Add attributes or properties
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "yellow";

//Step 3 Append Element to DOM
// document.body.append(newListItem); //append to body as last child
// document.body.prepend(newListItem); //prepend to body as first child
// document.getElementById("fruits").append(newListItem); //append to fruits ordered list as last child
// document.getElementById("fruits").prepend(newListItem); //prepend to fruits ordered list as first child

//to insert before an list item (for example orange), we use indertBefore(newElement, currentElement)
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

//if the html elements don't have any id, we use querySelectorAll to select all list items
const listItems = document.querySelectorAll("#fruits li"); //it is a nodelist
document.getElementById("fruits").insertBefore(newListItem, listItems[2]); //use index number for select specific element

//Remove HTML element

// document.body.removeChild(newListItem); //it will remove the element from body
document.getElementById("fruits").removeChild(newListItem); //it will remove the element, when it is in amother element