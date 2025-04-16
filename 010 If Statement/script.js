//If statement

// let age = 20;
// if(age >= 18){
//     console.log("Age is more than 18");
// }
// else{
//     console.log("Age is minor");
// }

// let time = 15;
// if(time < 12){
//     console.log("AM");
// }
// else{
//     console.log("PM");
// }

let isStudent = true;
if(isStudent){
    console.log("You're student");
}
else{
    console.log("You ain't student");
}

let age = 20;
let hasLicense = false;
if(age >= 18){
    console.log("Eligible for Lisence");
    if(hasLicense){
        console.log("Already has License");
    }
    else{
        console.log("Hasn't License");
    }
}
else{
    console.log("Age is lesser than 18");
} 