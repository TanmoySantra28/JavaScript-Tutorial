// .nextElementSibling =

// In fruits list, the apple, orange and banana are siblings to each other and children of fruits
// so for example if I select orange, next sibling will be banana

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling; //next sibling of apple is orange
nextSibling.style.backgroundColor = "blue";

const element2 = document.getElementById("orange");
const nextSibling2 = element2.nextElementSibling; //next sibling of orange is banana
nextSibling2.style.backgroundColor = "pink";

// const element3 = document.getElementById("banana");
// const nextSibling3 = element3.nextElementSibling; //there is no next sibling of banana, so it will select nothing
// nextSibling3.style.backgroundColor = "yellow"; //we need to comment this part where no sibling is present, otherwise nextElementSibling after this won't work

//also the unordered lists fruits, vegetables and desserts are siblings to each other and children of body element
//so if we reference to vegetables, next sibling will be desserts.
//if we change to the next sibling of vegetables, all the children of desserts will be affected

const ulElement = document.getElementById("vegetables");
const nextUlSibling = ulElement.nextElementSibling; 
nextUlSibling.style.backgroundColor = "yellow"; //the bg color of all the children of desserts will be changed