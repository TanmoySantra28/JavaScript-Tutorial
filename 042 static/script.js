//static = keyword that defines properties or methods that belong to class itself 
//         rather than the objects created from the class 
//         (class owns anything static, not the objects)

class MathUtil{
    e =  2.71828;
    static pi = 3.14159; //here we created a static property named pi

    static getDiameter(radius){ //static type function
        return radius * 2;
    }

    static getCircumtances(radius){
        return radius * 2 * this.pi;
    }

    static getArea(radius){
        return radius * radius * this.pi;
    }
} 

//anything declared as static belongs to the class itself and not to any object created from that class
console.log(MathUtil.pi); //to use the static property we don't need to create an object
console.log(MathUtil.getDiameter(10));  //passing the 10 as argument to the static function inside the class
console.log(MathUtil.getCircumtances(10));  
console.log(MathUtil.getArea(10));  

//but to use other non-static variable, we need to create an object
const obj1 = new MathUtil();
console.log(obj1.e);
