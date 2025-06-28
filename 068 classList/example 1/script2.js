const myButton = document.getElementById("myButtons");

// contains(), if the element contains a class, returns true, otherwise false


myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){ //if the button is disabled,  if portion will work otherwise else portion
        event.target.textContent += "!";
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
});

//using classlist property, we can reuse css classes amoung many html elements

const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");

 