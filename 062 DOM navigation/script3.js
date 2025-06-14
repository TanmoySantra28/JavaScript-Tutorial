// .previousElementSibling

// In vegetables list, the tomato, potato and beans are siblings to each other and children of fruits
// so for example if I select beans, previous sibling will be potato

const element = document.getElementById("beans");
const prevSibling = element.previousElementSibling; //previous sibling of beans is potato
prevSibling.style.backgroundColor = "blue";
 
const element2 = document.getElementById("potato");
const prevSibling2 = element2.previousElementSibling; //previous sibling of potato is tomato
prevSibling2.style.backgroundColor = "pink";

// const element3 = document.getElementById("tomato");
// const prevSibling3 = element3.previousElementSibling; //there is no previous sibling of tomato, so it will select nothing
// prevSibling3.style.backgroundColor = "yellow"; 
//we need to comment this part where no sibling is present, otherwise prevElementSibling after this won't work

//also the unordered lists fruits, vegetables and desserts are siblings to each other and children of body element
//so if we reference to vegetables, previous sibling will be fruits.
//if we change to the previous sibling of vegetables, all the children of fruits will be affected

const ulElement = document.getElementById("vegetables");
const prevUlSibling = ulElement.previousElementSibling; 
prevUlSibling.style.backgroundColor = "yellow"; //the bg color of all the children of fruits will be changed