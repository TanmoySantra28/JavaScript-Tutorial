//Number guessing game
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min) + min);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${min} and ${max} = `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Guess a valid number.`);
    }
    else if(guess<=1 || guess>=100){
        window.alert(`Guess a number between ${min} and ${max}.`);
    }
    else{
        attempts++;
        if(guess>answer){
            window.alert(`Too big. Try again.`);
        }
        else if(guess<answer){
            window.alert(`Too small. Try again.`);
        }
        else{
            window.alert(`Correct. The right number is ${guess}. You took ${attempts} attempts.`)
            running = false;
        }
    }

}