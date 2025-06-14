//DOM Navigation = The process of navigating through the structure 
//              of an html document using javascript.

//These are the properties for DOM navigation
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild = 

const element = document.getElementById("fruits"); 
const firstChild = element.firstElementChild;   //reference to the first child of fruits (Apple)
firstChild.style.backgroundColor = "yellow";    //change the background color of first child

const element2 = document.getElementById("vegetables"); 
const firstChild2 = element2.firstElementChild;   //reference to the first child of vegetables (Tomato)
firstChild2.style.backgroundColor = "yellow";    //change the background color of first child

const element3 = document.getElementById("desserts"); 
const firstChild3 = element3.firstElementChild;   //reference to the first child of desserts (Cake)
firstChild3.style.backgroundColor = "yellow";    //change the background color of first child

//We can use querySelectorAll for nodelist and use forEach method to access all the first child at once

const ulElements = document.querySelectorAll("ul"); //returns a nodelist of all the ul elements

ulElements.forEach(ul => {
    const first_Child = ul.firstElementChild;
    first_Child.style.textAlign = "center";
});