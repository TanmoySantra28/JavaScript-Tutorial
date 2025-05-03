class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getCount(){
        console.log(`Now Number of user is ${User.userCount}`)
    }
    sayHello(){     //non-static funciton
        console.log(`Hello I'm ${this.username}`);
    }
}

const user1 = new User("AB");
const user2 = new User("CD");
const user3 = new User("EF");

console.log(user1.username);
// console.log(user1.userCount); //it will show undefined, as 'userCount' is a property of User class, not the constructor
console.log(User.userCount);
user1.sayHello();

console.log(user2.username);
console.log(User.userCount);
user2.sayHello();

console.log(user3.username);
console.log(User.userCount);
user3.sayHello();

User.getCount(); 