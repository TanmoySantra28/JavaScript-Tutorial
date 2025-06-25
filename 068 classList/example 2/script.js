let buttons = document.querySelectorAll(".myButtons"); //nodelist of buttons

buttons.forEach(button => {
    button.classList.add("enabled"); //adding class to all the elements of the nodelist
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover"); //when we hover over the elements, it will toggle the "hover" class
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover"); //when we leave hovering over the elements, it will toggle the "hover" class
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled","disabled"); //when we click the elements, the enable class will be replaced with "disable" class
    });
});

//if the element has already "disabled" class, it will append new text content
buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "!";
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    });
});