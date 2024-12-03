//Taking user input

/*
let uname = window.prompt("Enter username = ");
let name1;
name1 = window.prompt("Enter name = ");
console.log(uname);
console.log(name1);
*/
let username;
document.getElementById("mysubmit").onclick = function ()
{
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`Welcome ${username}`;
}