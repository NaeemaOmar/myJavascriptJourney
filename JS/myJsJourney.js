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

 //Task 3: FUNCTIONS & CONDITIONAL STATEMENTS
//Q1
randToDollar(1000);

function randToDollar(rand){
   let dollar = rand/18.48;
   let roundedDollar = dollar.toFixed(2);
   console.log(`R${rand} is a mere $${roundedDollar}`);
   console.log(typeof roundedDollar);
}

randToEuro(1000);

function randToEuro(rand){
   let euro = rand/19.73;
   let roundedEuro = euro.toFixed(2);
   console.log(`R${rand} is a mere ${roundedEuro} in euros`);
   console.log(typeof roundedEuro);
}

randToPound(1000);

function randToPound(rand){
   let pound = rand/22.63;
   let roundedPound = pound.toFixed(2);
   console.log(`R${rand} is a mere ${roundedPound} in pounds`);
   console.log(typeof roundedPound);
}

//Q2

addVAT(400)
function addVAT(exclVAT){
    let inclVAT = (exclVAT*1.15).toFixed(2);
    console.log(`The amount after tax is R${inclVAT}`)
}

//Q3
let firstNum = 8, secondNum = 20, thirdNum =14;

compare(firstNum, secondNum);
function compare(x,y){
    if(firstNum>secondNum){
        console.log(`${firstNum} is greater than ${secondNum}`);
    }
    else {
        console.log(`${secondNum} is greater than ${firstNum}`);
    }
};


//Q4
oddOrEven(firstNum)
function oddOrEven(f){
    if(f%2==0){
        console.log(`${f} is even`);
    }
    else {
        console.log(`${f} is odd`);   
    }
}


//Q5
descOrder(firstNum, secondNum, thirdNum);
function descOrder(a, b, c){
    if (a<b && b<c){
        console.log(`${a}, ${b} and ${c} in descending order is ${c}, ${b}, ${a}`);
    }
    else if (a<c && c<b){
        console.log(`${a}, ${b} and ${c} in descending order is ${b}, ${c}, ${a}`);
    }
    else if (b<a && a<c){
        console.log(`${a}, ${b} and ${c} in descending order is ${c}, ${a}, ${b}`);
    }
    else if (b<c && c<a){
        console.log(`${a}, ${b} and ${c} in descending order is ${a}, ${c}, ${b}`);
    }
    else if (c<a && a<b) {
        console.log(`${a}, ${b} and ${c} in descending order is ${b}, ${a}, ${c}`);
    }
    else {
        console.log(`${a}, ${b} and ${c} in descending order is ${a}, ${b}, ${c}`);
    }
}
    