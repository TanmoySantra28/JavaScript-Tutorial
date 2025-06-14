//2. getElementsClassName()

//it returns html collection. it is like an array, but not a array
//html collection are iterable 

const fruits = document.getElementsByClassName("fruits");

console.log(fruits); //it will display a collection of elements, like an array

//to select one of the elements, we use index
fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "pink";
fruits[2].style.backgroundColor = "cyan";

//to iterate over these elements, we can use enhanced for loop
for(let f of fruits){
    f.style.textAlign = "center";
}

//html collections don't have a forEach method
//so instead we can typecast html collection as an array
Array.from(fruits).forEach(f => {
    f.style.backgroundColor = "lightgreen";
}); //it will return an array of fruits, then we can use forEach() method
