

//Arrays
// An array is an ordered list of values

let directors = [ //Create an array by using square brackets
    "Christopher Nolan", //Separate items with commas
    "M Night Shyamalan",
    "Steven Spielberg",
    "George Lucas"
]

//Some basic array methods

//.pop()
console.log(directors.pop()); //Removes the last item from the array and returns it
//Output: George Lucas
//Array will no longer contain the George Lucas item

//shift()
console.log(directors.shift()); //Removes the item from the beginning of the array and returns it


//.push()
directors.push('Sofia Coppola'); //Adds the item in brackets to the end of the array

//.unshift
directors.unshift('Sam Raimi'); //Adds the item in brackets to the beginning of the array



//Arrays begin at position 0
console.log(directors[0]); //Logs the first item in the array
console.log(directors[1]); //Logs the second item in the array
console.log(directors[2]); //Logs the third item in the array



//Arrays can contain a mixture of data types
let someRandomValues = [
    56,
    "Bob",
    34.7,
    true,
    null,
    "Hedinsgatan 3, Stockholm",
    '<div is="my-div"></div>'
]



//Accessing items in the array
let number = someRandomValues[0] + someRandomValues[2]; //Adds the two array items together
console.log(number); // Outputs 90.7 (total is converted to a float because one of the numbers is a float. Two integers would create an integer)


let string = 'My name is ' + someRandomValues[2] + ' and I live at ' + someRandomValues[5] + '.'; 
//Combines or 'concatanates' the two strings called from the array, along with some more strings to format the sentence
//Output: My name is Bob and I live at Hedinsgaan 3, Stockholm.

//Note: If we mix a number and a string, the number is treated as a string

//We can also return all of the information contained in the array
console.log(someRandomValues);









