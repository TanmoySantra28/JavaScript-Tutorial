//querySelector()
//it returns the first matching element, or null if no matches

const element = document.querySelector(".fruits"); //to select a element by classname, we use .classname (dot)
//reference the a single first element that matched
element.style.backgroundColor = "lightblue";

const ele1 = document.querySelector("h4"); //reference to the first h4 tag
ele1.style.backgroundColor = "lightred";

const ele2 = document.querySelector("li"); //reference to the first li tag
ele2.style.backgroundColor = "lightgreen";

const ele3 = document.querySelector("ul"); //reference to the first ul tag
ele3.style.backgroundColor = "lightpink";

const ele3 = document.querySelector("ol"); //if element not found, returns null
