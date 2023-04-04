console.log("You are welcome to the chapter 2");

// functions
// reusable chunks of code that provide a certain functionality
function sumNum(a, b, c) {
  console.log(`The sum of three numbers is ${a + b + c}`);
}

sumNum();

// loop
// print the numbers from 1 to 10
// -- means -1 ++ means +1

// for loop
// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }

// while loop
// var num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// why aren't we using const to declare variables in loops?

// Project
// to print the elements inside of an array using for or while loops
const arr = [
  "saffy",
  "code",
  "programs",
  {
    name: "code enthusiastic",
    job: "coding",
  },
];

// var index = 0;
// while (index < arr.length) {
//   console.log(arr[index]);
//   index++;
// }

// write down the multiplication table of any number
// ES6
const getTable = (num) => {
  for (var i = 0; i <= 10; i++) {
    console.log(`${num}x${i}=${num * i}`);
  }
};
getTable(5);

// write a function that prints the table of any number from the bottom or reverse table
const getReverseTable = (num) => {
  for (let i = 10; i >= 0; i--) {
    console.log(`${num}x${i}=${i * num}`);
  }
};

getReverseTable(7);
