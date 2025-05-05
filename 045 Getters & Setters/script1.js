class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    //to validate the inputs use setters
    set fname(nowfname){
        if(typeof nowfname === "string" && nowfname.length > 0){
            this._fname = nowfname;
        }
        else{
            console.error("First name must be non empty string");
        }
    }
    set lname(nowlname){
        if(typeof nowlname === "string" && nowlname.length > 0){
            this._lname = nowlname;
        }
        else{
            console.error("Last name must be non empty string");
        }
    }
    set age(nowage){
        if(typeof nowage === "number" && nowage > 0){
            this._age = nowage;
        }
        console.error("Age must be positive number");
    }

    //make it readable by getters
    get fname(){
        return `Firstname: ${this._fname}`;
    }
    get lname(){
        return `Lastname: ${this._lname}`;
    }
    get age(){
        return `Age: ${this._age}`;
    }
    //here we use getter to mimic a fullname property, which is not a property
    get fullname(){
        return `Fullname: ${this._fname+" "+this._lname}`;
    }
}

const person = new Person("Moumoni", "Bera", 20);

console.log(person.fname);
console.log(person.lname);
console.log(person.age);
console.log(person.fullname);
 