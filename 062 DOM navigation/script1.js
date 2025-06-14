// .lastElementChild = 

const element = document.getElementById("fruits"); 
const lastChild = element.lastElementChild;   //reference to the last child of fruits (Banana)
lastChild.style.backgroundColor = "yellow";    //change the background color of last child

const element2 = document.getElementById("vegetables"); 
const lastChild2 = element2.lastElementChild;   //reference to the last child of vegetables (Beans)
lastChild2.style.backgroundColor = "yellow";    //change the background color of last child

const element3 = document.getElementById("desserts"); 
const lastChild3 = element3.lastElementChild;   //reference to the last child of desserts (Pie)
lastChild3.style.backgroundColor = "yellow";    //change the background color of last child

//We can use querySelectorAll for nodelist and use forEach method to access all the last child at once

const ulElements = document.querySelectorAll("ul"); //returns a nodelist of all the ul elements

ulElements.forEach(ul => {
    const last_Child = ul.lastElementChild;
    last_Child.style.textAlign = "center";
})