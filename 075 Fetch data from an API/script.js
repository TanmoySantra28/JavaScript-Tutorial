//fetch = Function used for making HTTP requests to fetch resources.
// (JSON style data, images, files)

//Simplifies asynchronous data fetching in JavaScript and
// used for interacting with APIs to retrieve and send data asynchronously over the web.

//Syntax: fetch(url, {options})
//options is "object of options", such as method property
// {mehtod: "GET"} to get a resource, "PUT" to send some data, "DELETE" to delete some data

//to fetch something from an API we use fetch() function and pass the url
//fetch is promised based so can either be resolve or reject

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
     .then(response => response.json())      //convert the object we get from the api as response and then convert it into json format
     .then(data => console.log(data.name, data.weight))  //we can access any specific property
     .catch(error => console.error(error)); //if the resource not found, then caught the error

//if the resource not found, it returns status 404, and the ok property is false

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
     .then(response => {

        if(!response.ok){ //when resource not found so, the response's ok:false, then we throw a new error 
            throw new Error("Could not fetch resource");
        }
        return response.json(); //otherwise format as json
     })      
     .then(data => console.log(data.name, data.weight))  
     .catch(error => console.error(error)); 
