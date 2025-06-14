//using the arrow keys to move the element

const myBox = document.getElementById("myBox");
const moveAmount = 10; //moving distance with each press
let x = 0; //co-ordinates
let y = 0;

document.addEventListener("keydown", event => {

    myBox.textContent = "🚖";
    myBox.style.backgroundColor = "lightcoral";

    if(event.key.startsWith("Arrow")){  //we are only allowing arrowkeys

        //arrow keys have a default behaviour to scroll, that's why we can see the scrollbar if we went down too far
        event.preventDefault();    //to prevent the default behaviour,
        
        switch(event.key){
            case "ArrowUp":
               y -= moveAmount;
               break;
            case "ArrowDown":
               y += moveAmount;
               break;
            case "ArrowLeft":
               x -= moveAmount;
               break;
            case "ArrowRight":
               x += moveAmount;
               break;
        }
        myBox.style.top = `${y}px`; //top property adjusts the vertical position of the element
        //top property is used to position an element vertically relative to its nearest positioned ancestor, in css that's why we made position: relative
        myBox.style.left = `${x}px`; //left property adjusts the horizontal position of the element
        //left property is used to position an element horizontally relative to its nearest positioned ancestor, in css that's why we made position: relative
    }
});

document.addEventListener("keyup", event => {
    myBox.textContent = "🚕";
    myBox.style.backgroundColor = "lightblue";
});