//stopwatch

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime; //startTime is in ms since epic
        timer = setInterval(update,10) //timer stores unique id to work with this function, if we ever need to stop it
        isRunning = true;
    }
    
}

function stop(){
    if(isRunning){
        clearInterval(timer); //it will stop the stopwatch from running
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000*60*60)); //converts ms to hours
    let minutes = Math.floor(elapsedTime / (1000*60) % 60); //converts ms to minutes
    let seconds = Math.floor(elapsedTime / 1000 % 60); //converts ms to seconds
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); //remaining ms

    //typecasting to string and add zero padding to the left of the digits
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
} 