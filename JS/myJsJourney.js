            // Task 1: VARIABLES & OPERATORS
//Q1
let language = 'JavaScript';
let score = 10;

//Q2
let length = 10;
let width = 5;
console.log("The area of the rectangle is " + `${length*width}`);
console.log("The area of the rectangle is " + length * width);

//Q3
let num1 = 10;
let num2 = 4;
console.log("The remainder when 10 is divided by 4 is " + num1%num2);

//Q4
console.log(num1 + " / " + num2 + " = " + ~~(num1/num2) + " remainder " + num1%num2);
console.log(`${num1} / ${num2} = ${~~(num1/num2)} remainder ${num1%num2}`);


//Task 2: DATA TYPES
let integer = 18;
let decimal = 0.54;
let string = "Okie dokie yo";
let array = ["steven", 48, -12.8];
let object = {
    item1: "ruler",
    item2: "pen",
    amount: 24,
    quality: "very good"
};

console.log(integer);
console.log(decimal);
console.log(string);
console.log(array);
console.log(object);

console.log(typeof integer);
console.log(typeof decimal);
console.log(typeof string);
console.log(typeof array);
console.log(typeof object);

let cost = null;
let job = undefined;