
//Functions
// Functions are blocks of code designed to perform some task or purpose. 
// They can be called muliple times, both from within the Javascript code and from within the HTML

// Functions are created with the function command followed by a name, then parameters (if any) within the brackets, 
// and some code within the curly brackets

function basicFunction () {
    // Code here to run when the function is called
}

// To make a function run we need to call it

basicFunction (); // Will make basicFunction execute

// Functions can also be called from within the HTML
// <body onload="basicFunction()"> 
// In this example, basicFunction will be called when the body tag is loaded


//Parameters
// Functions can be passed parameters when they are called so that we can take input and use them in the function

// Two parameteres inside the brackets tell the function to expect two values to be "passed" to it when the function is called
function addNumbers (num1, num2) { 
    let sum = num1 + num2; // Perform some calculation using whatever values are passed to the function
    console.log(sum); // Will output whatever value the calculation generates
}

// We call the function, and give it two values, which will be assigned to the two parameters
addNumbers(7, 14);
// The function will running using the two parameters, assigning the value 7 to num1 and 14 to num2, then add them together, and log 21


//Return
// The function return stops running the code within the function and "returns" a value if one was assigned

function multiplyNumbers (first, second) {
    return first * second; // Will calculate the product of first * second and return it, then stop running the function
    console.log('I will not run'); // Will not run because it is after the function return
}

// Run the multiplyNumbers function with the values 5 and 3 passed to the first and second parameters
// The function will calculate the product of first * second and return it, assigning the value to the product variable
let product = multiplyNumbers(5, 3);
console.log(product); // Logs 15


//Self Invoking Functions
// Placing a function inside round brackets, then placing brackets after the function make it self invoking
// A self invoking function calls itself when the code runs without needing to be invoked elsewhere
// A self invoking function is not "declared" (eg. function myFunction())

// Function is invoked within round brackets without a declaration
(function () {
    console.log('I self invoke');  // Code will run without the function being called elsewhere
  })(); // Round brackets that surround the function close and are followed by closed brackets () that invoke the function 


//Arrow Functions
// The arrow function allows a function expression to be written with a shorter syntax

const x = (x, y) => x * y; // Everythig after the => acts as if inside curly brackets

// The line above is the equivalent of the code below
const x = function(x, y) {
    return x * y;
  }
  

//Scope
// Scope describes the section of code in which a variable can be accessed

// Variables declared outside of any function have global scope, meaning they can be accessed from anywhere in the script

let x = 87; // A global variable

function example () {
    console.log(x); // Can access the variable x because it is in the global scope
}

// A variable declared within a function has the local scope, and cannot be accessed outside of the variable

function example2 () {
    var z = 43; // variable can only be accesseed within this function because it is in the local scope
    console.log(z); // Works because it is called from inside the function and can access the variable z
}

console.log(z); // Does not work because it cannot access z as it is outside the function

// Local variables are created when the function runs and deleted when the function ends, so names their names can be reused in other functions


//Functions Calling Other Functions
// Functions can be called from inside other functions

function logSomething (logMe){ // Create a function that does something
    console.log(logMe);
}

function myFunction (x, y) {
    let sum = x + y;
    logSomething(sum); // Call that function inside another function
}


//Functions Can Contain Conditionals
// Functions can contain conditional statements

let userAge = 16;

function ageCheck (age) {
    if (age >= 18) {
        console.log("You're allowed to vote!")
    } else {
        console.log("You're not allowed to vote!")
    }
}

ageCheck(userAge);


//Functions Inside Arrays and Objects
// Functions can be stored within objects and arrays

// Example object containing functions
const functions = {
    alertDance  : function() { alert("Dance!"); },
    logSing     : function() { console.log("Sing!"); }
};

// Can be called with:
functions.alertDance(); // Will call the function from the functions object with the alertDance property


// Example array containing functions
const functions2 = [
    function() { alert("Laugh!"); },
    function() { console.log("Cry!"); }
];

// Can be called with:
functions2[0](); // Will call the function in the functions2 array at position 0

// Objects and arrays containing functions can, as usual, also contain a mixture of other data types
const functionsMix = {
    alertDance  : function() { alert("Dance!"); }, // Function
    Dance       : 'Macarena' // String
};



