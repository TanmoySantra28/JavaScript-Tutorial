//Date objects = Objects that contain values that represent dates and times.
//          That date objects can be changed and formatted

//contains current date and time
const date1 = new Date();
console.log(date1);

//to get custom date and time format, we have to pass these parameters to the Date constructor
// Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(2024,0,30,12,8,12,51); //months starts from 0
console.log(date2);

//the parameter passing to Date constructor can be string as well
const date3 = new Date("2025-05-30T12:08:12Z"); // T means time, Z for UTC
console.log(date3);

//another format is using amount of ms since the 'epic', epic means the day, your computer thinks times began
//usually Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
const date4 = new Date(15000000000); //1.5 billion ms after epic
console.log(date4);
 
//We can extract individual value from the Date object
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay(); //it will return number like 1 for Mon, 2 for Tue etc.

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayOfWeek);

//using these methods we can set custom date as well
date.setFullYear(2024);
date.setMonth(0);
date.setDate(31);
date.setHours(15);
date.setMinutes(8);
date.setSeconds(51);

console.log(date);