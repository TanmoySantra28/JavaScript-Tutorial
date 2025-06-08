//Counter

function increment(){
    let count = 0;
    count++;
    console.log(`Count variable increased to ${count}`);
}

increment();
increment(); //whenever we call the increment(), the count will be reset, we cannot maintaining the state.
//to solve this, we can declare and initialise the count variable outside the function, but it won't be secure

//Using closure, we can maintain the state, as well as the variable will be private and secure

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    //closure can have more than one function
    function getCount(){     //to return the count variable's value
        return count;
    }

    return {increment,getCount}; //returning a object having all properties of the function
}

const counter = createCounter(); //object to invoke the function, it is like a class

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());

 