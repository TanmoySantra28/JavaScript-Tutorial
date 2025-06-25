//Similary before, we are adding mouse event listeners to a button

const myButton = document.getElementById("myButton");
const myBox = document.getElementById("myBox");

//when we click on the button, it will change the myBox's color and text
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕";
});

//when we hover over the button, it will change the myBox's color and text
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "I said No 😰";
});

//when we leave hovering the button, it will change the myBox's color and text
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Don't Click it 🤨"; 
})