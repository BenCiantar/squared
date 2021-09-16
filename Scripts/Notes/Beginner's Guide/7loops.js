//Loops
// Loops are functions that execute a block of code multiple times

// Types of loops include:
//  for -       loops through a block of code a number of times
//  *for/in -    loops through the properties of an object 
//  *for/of -    loops through the values of an iterable object
//  while -     loops through a block of code while a specified condition is true
//  do/while -  also loops through a block of code while a specified condition is true

// * Not going to cover in this guide

//For Loops
// These loops take three statements and loop through the code inside a number of times based on those statements
// The statements are placed between brackets, and separated by semicolons (;) - (statement 1; statement 2; statement 3)

// Statement 1 (let i = 0) sets a variable i to 0. i will act as our counter to determine how many times the code runs
// Statement 2 (i < 5) checks if our counter variable is less than 5, and if it is the code within the curly brackets will run
// Statement 3 (i++) after the code inside the curcly brackets has run, this will increment our counter by one

// The for loop will then run again, with i now equal to 1
// i is still less than 5, so the code inside will run again, and the counter will increment again
// This process will repeat until i is equal to five, then the loops will end

for (let i = 0; i < 5; i++) {
    console.log(i); // This code will run each time the loop repeats
  }

// Output:
//   0
//   1
//   2
//   3
//   4

//Using for loops with an array
// We can use a for loop to access each item in an array

const myArray = [
    'Dog', // 0
    'Cat', // 1
    'Moose', // 2
    'Canary' // 3
]

// myArray.length will check the number of items in the array and return that as a number (4 in this case)
// The loops will stop running when i is equalt o the position of the last item in the array

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // Will log whatever item is at the position in the array that matches the value of i for that loop
}

// Output:
// Dog
// Cat
// Moose
// Canary
// Note: We don't need to use i as the name for our counter variable, but it is standard practice
// Note: It is not mandatory to include all three statements in the condition
// The loop can use external variables, increment inside the function, and other changes that make one or more of the statements redundant


//While Loop
// While loops run a block of code over and over as long as a condition is true

let num = 2;

while (num < 5) { // Checks that the variable num is less than 5, and runs the code if it is
    console.log('The number is ' + i); // Logs a string noting the current value of num
    num++; // Increments num
}

// Output:
// The number is 2
// The number is 3
// The number is 4

// Note - failing to change the counter variable on each loop so that the condition eventually becomes false will make the code run over and over, 
// creating an infinite loop and crashing the browser


//Do/While
// A variant of the while loop, it runs the code then checks the conditon, and if the condition is true it will run again

let i = 3;

do { // Will always run at least once
    text += "The number is " + i;
    i++; 
  }
  while (i <= 10); // Checks if the condition is true, and runs the code in the do section again if it is true

// Output:
//   The number is 3
//   The number is 4
//   The number is 5
//   The number is 6
//   The number is 7
//   The number is 8
//   The number is 9
//   The number is 10