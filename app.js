// 📓 Console Logging Practice

// 1. Simple Logging: Log the message "Hello, Bootcamp!" to the console.
// Your code here

console.log("Hello Bootcamp!")

// 2. Variable Logging: Declare a variable named `greeting` with the value "Welcome to JavaScript!" and log it to the console.
// Your code here

let greeting = "Welcome to JavaScript!";
console.log(greeting);


// 3. Logging Multiple Values: Declare variables `firstName` and `lastName`. Combine them into a message that says "Hello, [firstName] [lastName]!" and log it.
// Your code here

let firstName= "Mohamed "
let lastName= "thamer"
function sambosa(firstName , lastName){
    return (firstName + lastName)
}
console.log ("hello ", sambosa(firstName , lastName) )


// 4. Logging Calculations: Calculate the sum of `5 + 10`, and log the result with the message "The sum of 5 and 10 is: [result]".
// Your code here

function calculate(num1 , num2){
    return (num1 + num2)
}

console.log("the sum of 5 and 10 is", calculate(5, 10));

// 📓 `let` and `const` Variable Declaration

// 5. Basic Variable with `let`: Use `let` to declare a variable called `age` and assign it `25`. Update `age` to `26` and log it to the console.
// Your code here

let age = 25;
age +=1;
console.log(age)

// 6. Basic Constant with `const`: Declare a variable `birthYear` using `const` with a value of `1995`. Try changing `birthYear` to `1996` and see what happens.
// Your code here

// const birthYear = 1995;
// birthYear = 1996;

// 📓 Template Literals

// 7. Basic Template Literal: Create a greeting using template literals to log "Hello, [firstName] [lastName]!".
// Your code here

const fN = "Mohamed";
const lN = "Thamer";

console.log(`Hello, ${fN} ${lN}!`)




// 8. Greeting with Current Year: Use template literals to log "Hello, Taylor! Welcome to the year 2024" with variables `name` and `year`.
// Your code here


let n = "Taylor";
let year = 2024;

console.log(`Hello, ${n}! Welcome to the year ${year}`)

// 📓 Conditional Statements

// 9. Simple `if` Statement: Declare a variable `temperature`. If `temperature` is greater than 30, log "It's hot outside."
// Your code here

let temperature = 32; 

if (temperature > 30) {
    console.log("It's hot outside.");
}



// 10. Basic `if/else` Statement: Declare a variable `isRaining`. If it’s true, log "Take an umbrella"; if false, log "No umbrella needed."
// Your code here

let isRaining = "Rainy" ;

if (isRaining === "Rainy"){
    console.log("take an umberalla")
}

else{
    console.log ("no umberalla needed")
}


// 11. `if/else` with Comparison: Check if `age` is 18 or older. Log "You are eligible to vote" or "You are not eligible to vote" based on the result.
// Your code here

age = 18
 if(age){
  age > 18
  console.log("You are not eligible to vote")
 }


// 12. `if/else if/else` Chain: Use `score` to determine grades: log "Grade: A" for 90+, "Grade: B" for 80-89, otherwise "Grade: C".
// Your code here

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} 
else if (score >= 80) {
    console.log("Grade B");
}
 else {
    console.log("Grade C");
}



// 13. Combined Conditions with Logical Operators: Declare variables `isMember` and `purchaseAmount`. Log "You qualify for a discount" if `isMember` is true and `purchaseAmount` is greater than 100.
// Your code here

let isMember = "yes"
let purchaseAmount = 1184

if (isMember && purchaseAmount > 100){
    console.log("you qualify for a discount")
}


// 📓 `for` Loops

// 14. Counting with `for` Loop: Write a `for` loop to log numbers from 1 to 5.
// Your code here

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

// 15. Counting Down with `for` Loop: Use a `for` loop to log numbers from 5 down to 1.
// Your code here

for (let i = 5; i >= 1; i--) {
    console.log(i);
  }

// 16. Summing with `for` Loop: Use a `for` loop to calculate and log the sum of numbers from 1 to 10.
// Your code here

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("The sum of numbers from 1 to 10 is", sum);


// 📓 Functions

// 17. Simple Function: Define a function `greet` that logs "Hello, world!" when called. Call the function.
// Your code here

function greet() {
    console.log("Hello, world!");
}

greet();



// 18. Function with Parameter: Define a function `square` that takes a number, squares it, and returns the result. Call the function with a test number and log the result.
// Your code here



// 19. Function with Multiple Parameters: Write a function `add` that takes two numbers and returns their sum. Call it and log the result.
// Your code here


// 20. Conditional Logic Function without Modulo: Write a function `checkNumber` that takes a number and returns "Positive", "Negative", or "Zero". Test the function with several values and log the results.
// Your code here


// 21. Function with Conditional Logic: Write a function `isEven` that returns `true` if a number is even and `false` if odd. Call it with a number and log the result.
// Your code here