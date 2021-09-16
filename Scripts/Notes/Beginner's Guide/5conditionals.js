
//Conditionals are statements that are used to run code only when certain conditions are met

//If Statement
// An If statements checks a condition (between the brackets) and will run all the code {between the curly brackets} if the condition is true

let x = 17;

if (x === 17) {
    // Code here will run - the condition is true
}

if (x === 25) {
    // This code will not run - the condition is false
}

// We can check more than just if two values are equal. We have a range of comparison operators we can use in our conditionals

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// We can also use the ternary operator (?) as a shortcut for simple if statements

var age = 26;

var beverage = (age >= 21) ? "Beer" : "Juice";
// The condition age >= 21 is true, so the value to the left of the colon is passed to beverage
console.log(beverage); // "Beer"


var age = 15;

var beverage = (age >= 21) ? "Beer" : "Juice";
// The condition age >= 21 is false, so the value to the right of the colon is passed to beverage
console.log(beverage); // "Juice"


//Logical Operators
// We can also use logical operators to check muliple conditions at the same time

// &&	logical and
// ||	logical or
// !	logical not

let x = 5;
let y = 10;
let z = 15;

// Logical And (&&) examples
if (x === 5 && y === 10) {
    // Will return true and code will run because BOTH consitions return true
}

if (x === 5 && y === 5) {
    // Will return false and code will not run because ONE OR BOTH consitions return false
}


// logical Or (||) examples
if (x === 5 || y === 5) {
    // Code will return true and run because AT LEAST one of the conditions return true
}

if (x === 30 || y === 30) {
    // Code will return false and not run because NONE of the conditions return true
}


// Logical Not (!) example

if (!(x === 30)) {
    // Code will return true and run because the condition within the inner brackets is false (NOT true === true)
}

if (!(x === 5)) {
    // Code will return false and not run because the condition within the inner brackets is true (NOT true === false)
}


//Nested Conditions
// We can combine conditions by placing them in brackets

if ((x === 5 || x === 50) && (z === 500 || z === 15)) {
    // Code will return true and run because the first OR condition is true AND the second OR condition is true
}

//          false                   false                   true
if ((x !== 5 && x === 10) || (y <= x || y >= z) || (z !== x && z !== y)) {
    // Code will return true and run because at least one of the nested conditions returns true, making the entire OR statement true
}


//Other Conditional Statements

//Else Statement
// The else statement checks an if statement, and runs a block of code if the if statement returns false

let userAge = 17;

if (userAge >= 18) {
    // Code will return false and will not run
} else {
    // This code will run because the if statement did not return true and run
}

if (userAge >= 15) {
    // Code will return true and will run
} else {
    // This code will not run because the if statement returned true and ran
}


//Else If Statement
// The else if statement checks a series of if statement and runs the first that returns true, 
// or runs the mandatory else statement if all return false

let num = 50;

if (num < 10) {
    // Will not run because condition false
} else if (num < 20) {
    // Will not run because condition false
} else if (num < 45) {
    // Will not run because condition false
} else if (num < 60) {
    // Will run because it is the first if statement to return true
} else if (num < 100) {
    // Will not run because a previous if stateent returned true
} else {
    // Will not run because one of the if statements returned true
}


if (num < 10) {
    // Will not run because condition false
} else if (num < 20) {
    // Will not run because condition false
} else if (num < 30) {
    // Will not run because condition false
} else if (num < 40) {
    // Will not run because condition false
} else if (num < 49) {
    // Will not run because condition false
} else {
    // Will run because none of the if statements returned true
}


//Switch Statement
// Takes an expression and checks if each of the cases match it, running the code for the first switch that matches, or default code if none match
// The break command stops the code from running after a case is matched
// If a break is omitted all code in the rest of the statement will run, 
// regarless of it the expression matches the case, until another break is encountered.


// Example where expression matches a case
let userInput = 'Bananas';

switch (userInput) {
    case 'Oranges': // Will not run because expression does not match the case
        console.log('Oranges are $0.59 a pound.'); 
        break;
    case 'Apples': // Will not run because expression does not match the case
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas': // Will run any code within the case as the expression matches the case
        console.log('Bananas are $0.48 a pound.');
        break; // Code will stop running here
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
  }


// Example where expression does not match any case
let userInput = 'Grapes';

switch (userInput) {
    case 'Oranges': // Will not run because expression does not match the case
        console.log('Oranges are $0.59 a pound.'); 
        break;
    case 'Apples': // Will not run because expression does not match the case
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas': // Will run any code within the case as the expression matches the case
        console.log('Bananas are $0.48 a pound.');
        break; 
    case 'Cherries': // Will not run because expression does not match the case
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes': // Will not run because expression does not match the case
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Papayas': // Will not run because expression does not match the case
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default: // Will run because the expression did not match any of the cases
        console.log('Sorry, we are out of ' + expr + '.');
  }


// Example where a break statement was omitted
let userInput = 'Bananas';

switch (userInput) {
    case 'Oranges': // Will not run because expression does not match the case
        console.log('Oranges are $0.59 a pound.'); 
        break;
    case 'Apples': // Will not run because expression does not match the case
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas': // Will run any code within the case as the expression matches the case
        console.log('Bananas are $0.48 a pound.');
                    // Break statement missing so code will continue to run 
    case 'Cherries': 
        console.log('Cherries are $3.00 a pound.'); // Will execute despite case not matching
        break; // Code will stop running here
    case 'Mangoes':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Papayas': 
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default: 
        console.log('Sorry, we are out of ' + expr + '.');
  }