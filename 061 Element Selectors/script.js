//Element selectors = Methods used to target and manipulate HTML elements
//                  They allow you to select one or multiple HTML elements 
//                  from the DOM (Document Object Model)

// 1. document.getElementById() //returns element or null
// 2. document.getElementsClassName() //html collection
// 3. document.getElementsByTagName() //html collection
// 4. document.querySelector()  //first element or null
// 5. document.querySelectorAll()   //nodelist

//1. getElementById()

const myHeading = document.getElementById("my-heading"); //storing the reference to the id, if the id doesn't exist, it returns null
//we can access the html h1 element using this reference
myHeading.style.backgroundColor = "lightblue";
myHeading.style.textAlign = "center";
//when we use css properties through DOM, it follows a camelCase naming convention
//and when we use it in css file, we use hyfenated naming convention

console.log(myHeading); //it will display my html element of that id, including styles if any 