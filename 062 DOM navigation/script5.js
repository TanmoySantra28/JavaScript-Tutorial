// .children = 
// We can return all of the children of a selected element

const element = document.getElementById("fruits");
const children1 = element.children; //it will return a html collection
console.log(children1);

//html collectons are not iterable so we need to typecast into an array, so that forEach method can be used
Array.from(children1).forEach( child => {
    child.style.backgroundColor = "cyan";
});

//we can access the children by their index number
const element1 = document.getElementById("desserts");
const children2 = element1.children;

children2[1].style.backgroundColor = "green"; //it will highlight only the value of index 1