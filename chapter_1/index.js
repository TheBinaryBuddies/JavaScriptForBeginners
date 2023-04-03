// Console Methods
// Everything in JS is an object

// Ecma Script

// console.log("Hello World!");
// console.error("This is an error. You need to fix it real quick.");
// console.warn("You have a missing dependency.");

// Variable
// Those entities that store data

// Three methods for creating a varaible

var name = "Jack Sparrow"; //string
// console.log(name);

// // Block based
let creator = "Saffy";
// console.log(creator);

// // constant
const user = "You";

// user = "Not you";
// console.log(user);

name = "Captain";
// console.log(name);

// Datatypes
// they are the types of data
// String

const str = "$@&*%TE:ITF:Gqw9320q750h";
// console.log(str);

// Number
const num1 = 5.6;
const num2 = 6.5;
// console.log(num1 + num2);

// Object
const obj = {
  // [keys]:[vlaue]
  name: "Safal",
  nationality: "Nepali",
  age: 20,
  gender: "Male",
  obj2: {
    name: "Aaditya",
    age: 23,
    nationality: "Nepali",
    gender: "Male",
  },
};

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.nationality);
// console.log(obj.gender);

// console.log(obj.obj2.name);
// console.log(obj.obj2.age);
// console.log(obj.obj2.gender);
// console.log(obj.obj2.nationality);

// Array
// They are the combination of different datatype and stores them in the form of elements
const arr = [
  "saffy", //0
  "arun", //1
  "aaditya", //2
  20, //3
  23, //4
  21, //5
  {
    name: "Code Enthusiastic",
    job: "Programming",
  }, //6
];

//index 0,1,2,3,4,5,6...

// console.log(arr);
// console.log(arr[6].name);
// console.log(arr[6].job);

// Boolean
// true of false
const bool = true;
// console.log(bool);

const number1 = 8;
const number2 = 18;

const compraedValue = number1 >= number2;
// console.log(compraedValue);

const username = "Saffy6801";
const password = "broiscool";

const a = 15;
const b = "15";

const comparision = a === b;
// console.log(comparision);

// operators
// arithmetic operators + - = * /
// >= <= > < comparision operators
// == ===
// && || "and" and "or" logical operator

// Undefined
let undef;
// console.log(undef);

// Null
const nothing = null;
// console.log(nothing);

// conditions

// const userAge = 40;

// if (userAge >= 40) {
//   console.log("You are too old to drive");
// } else if (userAge >= 18) {
//   console.log("You can drive");
// } else {
//   console.log("You are too young to drive");
// }
// input
// const input = prompt("Enter your age:");
// const age = parseInt(input);
// console.log(age);

// Test
// write a program where you take an input from the user and check if the user is greater or equals to 18 and then check if the user is above 40 or not

const ageUser = parseInt(prompt("Enter Your Age: "));
if (ageUser >= 40) {
  console.log("You're too old to drive");
} else if (ageUser >= 18) {
  console.log("You can drive");
} else {
  console.log("You are too young to drive");
}
