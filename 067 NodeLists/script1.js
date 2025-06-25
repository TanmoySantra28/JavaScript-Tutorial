
let buttons = document.querySelectorAll(".myButtons"); //returns a nodelist


//add new element
const newButton = document.createElement("button"); //step 1: creation
newButton.textContent = "Button 5"; //step 2: add necessary attributes
newButton.classList = "myButtons"; //to add classname, use classList property 
document.body.appendChild(newButton); //step 3: append to dom

console.log(buttons); 
//nodelist will still contains only 4 buttons, even though button 5 is in the dom, we need to manually add it to nodelist using querySelectorAll
buttons = document.querySelectorAll(".myButtons");
console.log(buttons); //now the nodelist contains 5 elements

//remove an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        //even though we remove the buttons from the DOM, the node still have 4 elements, we have to update it manually
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});
 