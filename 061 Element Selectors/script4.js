// 5. querySelectorAll()

//this returns a nodelist, it is similar to an html collection
//but unlike these, it has built-in methods, similar to array

//html collections are live or dynamic, but nodelist is static, they don't automatically update on DOM

const fruits = document.querySelectorAll(".fruits"); //reference to the fruits class

fruits[0].style.backgroundColor = "yellow";

const veges = document.querySelectorAll("li"); //reference to the list elements

veges[1].style.backgroundColor = "pink";

console.log(veges); //it will display a nodelist, nodelist has built in forEach method

veges.forEach(v => {    //we don't need to typecast
    v.style.backgroundColor = "lightgreen";
});