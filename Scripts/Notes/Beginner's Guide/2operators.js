

//Operators
// Operators are symbols that have some sort of use in writing Javascript code

//Assignment operators
// These operators are used to assign values. The most basic is the equals sign.
// The equals sign passes a value from right to left

const x = 'Cat';

// There are more assignment operators that can be used to save time

//Operator  Example     Can also be written as
// =	    x = y	    x = y           
// +=	    x += y	    x = x + y
// -=	    x -= y	    x = x - y
// *=	    x *= y	    x = x * y
// /=	    x /= y	    x = x / y
// %=	    x %= y	    x = x % y
// **=	    x **= y	    x = x ** y

//To understand how more complex assignment operators work, we first need to look at Arithmetic Operators



//Arithmetic Operators
// These operators are used to perform calculations and to manipulate values

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// Variables can be declared using arithmetic operators

let sum = 55 + 34;  // Sum will contain the integer 89
const ammount = 9 * 5; // Ammount will contain the integer 45

let x = 2;
x++; // Adds 1 to the value stored in variable x

// The + operator can also concatenate (string together) a series of strings
// here we store a string in a variable, then concatenate it with a second string

let city = 'Stockholm';
let sentence = 'I live in ' + city; //Returns I live in Stockholm. Note: Don't forget spaces!

// Be careful mixing data types. Sometimes it will create an unwanted result

let num = 5 * 6.8; // Will convert the first number to a float, and will output a float, not an integer

let data = 55 / 'dog'; // Will return NaN (Not a Number)

let adress = 'I live at Valhallavägen ' + 23; // Will convert the integer to a string, and return a whole string

// There are many combinations, so be sure to research before mixing data types


//Comparison Operators and Logical Operators
// These operators let you compare multiple values and check multiple conditionals at once
// I'll list them below for reference, but expand on their use in conditionals.js

// Comparison Operators
// ==	equal to
// ===	strict equal - equal value and equal type
// !=	not equal
// !==	strict not equal - not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// Logical Operators
// &&	logical and
// ||	logical or
// !	logical not

//There are a few more types of operators, such as type and bitwise, which I won't cover here