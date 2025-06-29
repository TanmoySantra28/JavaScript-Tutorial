//image slider

let slides = document.querySelectorAll(".slides img"); //nodelist of images 
let slideIndex = 0; //slide index initially 0 for the first slide
let intervalId = null;

//we are displaying the initial image after all the DOM contents loading
document.addEventListener("DOMContentLoaded", initializeSlider);

//function to initialize the slider, it will populate the browser with the 1st image
function initializeSlider(){
    
    if(slides.length > 0){ //if there's no slides, if portion won't work
        
        //it will add the displaySlide class to 1st index of the slides nodelist (to display)
        slides[slideIndex].classList.add("displaySlide"); 
        intervalId = setInterval(nextSlide, 5000); // after 5 sec, next slide will come, and it returns a interval id
    }
} 

//function to show the slides
function showSlide(index){

    if(index >= slides.length){ //when we reach the last slide, we set the slideIndex to 0
        slideIndex = 0;
    }
    else if(index < 0){ //when we are at the 1st slide and click on the prev button, slideindex will be set to end
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => { //iterate through all each slides
        slide.classList.remove("displaySlide"); //remove the displaySlide class from the current slide, before move to next slide
    });
    slides[slideIndex].classList.add("displaySlide");
}

//function to prev button, for going to previous slide
function prevSlide(){
    clearInterval(intervalId); //❗if we want to stop the interval when we click on the prev button
    slideIndex--;
    showSlide(slideIndex);
}

//function to next button, for going to next slide
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}