// = assignment operator
// == comparison operator (comapare the value only not datatype)
// === strict equality operator (returns true if both the values and datatype are same)
// != inequality operator (if the values are not matched, then it returns true)
// !== strict inequality operator (if not only the values, but also the datatypes are different then, it returns true)

const PI = 3.14;
if(PI == "3.14"){
    console.log("True");//Values are matched, even though datatypes are different, returns true
}
else{
    console.log("False");
}

const PI1 = 3.14;
if(PI1 === "3.14"){
    console.log("True");//Even though values looks same but datatypes are different, returns false
}
else{
    console.log("False");
}

const st1 = "Hello";
if(st1 === "367"){
    console.log("True");//Even though datatypes are same but, values looks same but different, returns false
}
else{
    console.log("False");
}

const num = 56;
if(st1 === "367"){
    console.log("True");//Both values and datatypes are different, returns false
}
else{
    console.log("False");
}

const PI2 = "3.14";
if(PI2 === "3.14"){
    console.log("True");//Values and datatypes both are same, returns true
}
else{
    console.log("False");
}

const PI3 = 3.14;
if(PI3 != "3.14"){
    console.log("True");// only values are matched, even though datatypes not matched, returns false
}
else{
    console.log("False");
}

const PI4 = 3.14;
if(PI4 !== "3.14"){
    console.log("True");//values are matched and datatypes are not matched, so returns true
}
else{
    console.log("False");
}