//DOM = DOCUMENT OBJECT MODEL
//      Object{} that represents the page you see in the web browser
//      and provides you with an API to interact with it.
//      Web browser constructs the DOM when it loads an HTML document,
//      and structures all the elements in a tree-like representation.
//      JavaScript can access the DOM to dynamically
//      change the content, structure, and style of a web page.

console.log(document); //it will display our html document object
console.dir(document); //it will lists all of the properties in the object

document.title = "My Site"; //it will change the title of the site dynamically

document.body.style.backgroundColor = "pink"; //it will change the background colour to pink dynamically

const username = "Tanmoy";
const welcomeH1 = document.getElementById("welcome-h1");

welcomeH1.textContent += username === "" ? `Guest` : username;
//if username is empty it will concatenate Guest with the string that is written in the H1 in html file
//if username is not empty, it will concatenate the username
 