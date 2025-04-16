let marks = 32;
let grade;

switch(true){
    case marks >=90:
        grade = "A";
        break;
    case marks >=75:
        grade = "B";
        break;
    case marks >=60:
        grade = "C";
        break;
    case marks >=45:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Grade = ${grade}`); 