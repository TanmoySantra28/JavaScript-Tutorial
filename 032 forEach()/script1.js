let fruits = ["Apple", "Orange", "Grape", "Melon"];


fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase); 
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function upperCase(element, index, array){  //make all the elements uppercase
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){  //make all the elements lowercase
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){  //Capitalize the first letter only
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
