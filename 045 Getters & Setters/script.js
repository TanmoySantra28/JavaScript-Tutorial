//getter = special method that makes a property readable
//setter = special method that makes a property writable
//validate and modify a value when reading/writing a property

class Rect{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(nowWidth){ //it is setter for width
        if(nowWidth > 0){
            //underscore means we are letting the other developers know that it is a private property
            //means you shouldn't touch it at all, here pvt property of width is different than standard width property
            this._width = nowWidth;
        }
        else{
            console.error("Width is invalid");
        }
    }

    set height(nowHeight){ //it is setter for height 
        if(nowHeight > 0){
            this._height = nowHeight;
        }
        else{
            console.error("Height is invalid");
        }
    }
    //Even though after using the setters, the output will still show undefined
    //Because these properties are now just writable via setters, but they are not readable, so need to use getters

    get width(){    //getters it will return the values of pvt properties, to make it readable
        return `${this._width} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}`; //with getter, we can add additional logic, like here we add toFixed method and returning a string to display
    }
    //with getters we can use the property accessor that dot to access the property that doesn't necessarily exists
    //area isn't a property, it doesn't present within the constructor
    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

//it will work fine, but it seems un realistic, we need some positive numbers
//so we need to validate it, that can be done using getters and setters
const rectangle = new Rect(109, 98);
console.log(rectangle.height);
console.log(rectangle.width); 

//By using setters we can update the values later
rectangle.width = 9;
// rectangle.width = -9; //if we initialise any invalid value, then it will show error and the object retains its initial value.
rectangle.height = 12; 

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area); //now we can use area as it is a property


//when assigning value even when we initially creating an object, we can go through the setters for input validation
//when you retrieve value and try to read them, you can add additional logic through the getters.