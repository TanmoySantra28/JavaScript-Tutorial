//Simple timer
let timeoutId;

function startTimer(){ //when user clicked on start button, timer will start
    timeoutId = setTimeout(() => window.alert("hello"),5000);
    document.getElementById("myp").textContent = "Timer started";
}
function clearTimer(){ //when user clicked on clear button, timer will clear
    clearTimeout(timeoutId);
    document.getElementById("myp").textContent = "Timer cleared";
} 