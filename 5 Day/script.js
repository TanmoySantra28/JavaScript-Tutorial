const digit = document.getElementById("label1");
const increase = document.getElementById("btnincrease");
const decrease = document.getElementById("btndecrease");
const reset = document.getElementById("btnreset");
 
let count=0;

increase.onclick = function(){
    count++;
    digit.textContent=count;
}   

decrease.onclick = function(){  
    count--;
    digit.textContent=count;
}

reset.onclick = function(){
    count = 0;
    digit.textContent=count;
}