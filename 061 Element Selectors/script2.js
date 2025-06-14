//3. getElementsByTagName()
//we can select these html elements by their tag names

//returns html collection

const h4Elements = document.getElementsByTagName("h4"); //reference to all h4 elements
const liElements = document.getElementsByTagName("li"); //reference to all li elements

console.log(h4Elements); //it will display the elements

//we can access individual elements of the html collection by an index
h4Elements[0].style.backgroundColor = "yellow";

//to iterate over these elements, we can use enhanced for loop
for(let h of h4Elements){
    h.style.textAlign = "center";
}

for(let li of liElements){
    li.style.backgroundColor = "lightgreen";
}

//typecast html collection as an array
Array.from(h4Elements).forEach(h => {
    h.style.backgroundColor = "lightblue";
}) 