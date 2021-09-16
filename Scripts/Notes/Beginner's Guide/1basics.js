//What is the DOM?
// The Document Object Model is an object that contains all the data that makes up a web page. 
// The DOM determines what the user sees on their screen.

//camelCase
// Use camelCase whenever naming things in Javascript (unlike CSS where we use lowercase separated by dashes eg. content-box). 
// Names in camelCase have the first word in lowercase then each subsequent word begins with an uppercase, without spaces or dashes between.

//Semicolon
// Add a semicolon (;) to the end of every line of code where the next line of code would be broken if they flowed together. 
// Modern javascript can usually detect when there should be a semicolon, but it’s best practice to add them yourself.

//console.log()
// An inbuilt method of the console that will print whatever is between the brackets to the console, which is visible when inspecting a page
// This is useful for checking what value a variable, object, array etc. holds at any point in the code, particularly during debugging

console.log('Dog'); // Prints Dog to the console log
let x = 'Cat';
console.log(x); // Prints Cat to the console log

//Variables
// Variables are simply containers for storing data. We can then call these variables throughout our script and use the data it 
// contains for all sorts of uses.

var name = 'Ben';
let name2 = 'Ben';
const name3 = 'Ben';


// Var still works fine in the vast majority of cases, but it’s best practice to always use let or const instead.
// Let and const work almost exactly the same, with the key difference being that once you assign a value to let, 
// you can reassign it later, while trying to reassign a const will return an error.

let name4 = 'Ben';
const city = 'Stockholm';
 
name4 = 'Benjamin'; //Works
city = 'Sydney'; //Returns an error



//Data Types
let string = 'Hi, my name is Douglas'; //Strings are placed between quotation marks.
let string2 = '56'; //If a number is inside quotation marks, it is treated as a string.
let myVariable = 'What up dog?'; //We can use any name to declare a variable.
 
const number = 57; //Numbers are not placed in quotations marks. This is an integer (whole number)
const num = 9.7; //This is a float (contains non whole numbers, expressed with decimal point)
let num2 = -65.2; //Integers and floats can also be negative values
//We can use + - * / etc to perform calculation using variables that contain numbers
 
let boolean = true; //Booleans are true 
const bool = false; //or false statements
 
let null1 = null; //Null represents the intentional absence of a value. 
//Null is treated as false for boolean operations
 
const undef; //This variable is uninitialized because we have assigned it no value
//It therefore contains the data type undefined.
//Undefined equates to null, and returns a boolean value of false
 
 
//We can also assign arrays, objects and functions to variables, but we'll look at this later
const array = [
    //Array items
]
 
const obj = {
    //Object properties
}
 
let functionOne = function() {
    // Some code
};



//This Keyword (Note: some knowledge of objects, arrays and functions is needed to understand these examples)
// The keyword this is used to refer to the object it belongs to. 
// When used outside of an object, this will refer to the global "object window" (the window that is open in the browser)

let x = this; // Refers to the object window

// When used within a function, the default target is the owner of the function, which is again the object window

function example () {
    return this; // Returns the object window
}

// When used in an event handler, this refers to the HTML element that triggers the event
// <div onclick="this.style.display='none'"> // This targets the div it is called in, so that div will set to display none on click
//   Click to Remove Me!
// </div>

// When used inside an object, this refers to the object

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        // Returns a string with the firstName property and lastName property from this object
      return this.firstName + " " + this.lastName;
    }
  };