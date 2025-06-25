//Hide and Show an element of HTML

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){ //check whether the image is hidden or not
        myImg.style.visibility = "visible"; //it will show the image, if it was hidden
        myButton.textContent = "Hide"; //text on the button becomes 'Hide'
    }
    else{
        // myImg.style.display = "none"; //the image will be hidden
        myImg.style.visibility = "hidden"; //hide the image using visibility property
        myButton.textContent = "Show"; //text on the button becomes 'Show'

        //when we select the display as none, because it doesn't reserve any space for image, so the button will go to the top
        //to reserve some space, we can use 'visibilty' property instead of 'display' property
    }
}); 