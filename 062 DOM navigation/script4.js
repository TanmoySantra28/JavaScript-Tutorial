// .parentElement =
//whichever element we select, we will get its parent
//for example, if we select orange, we will get fruits

const element = document.getElementById("orange");
const parent = element.parentElement; //we will get fruits, as it is the parent of orange
parent.style.backgroundColor = "green"; //all the children of fruits will be affected

const element1 = document.getElementById("vegetables");
const parent1 = element1.parentElement; //we will get body tag, as it is the parent of unordered list vegetables
parent1.style.textAlign = "center"; //all the children of body will be affected