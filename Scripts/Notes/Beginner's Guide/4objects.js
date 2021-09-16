

//Objects
// An object is a container like a variable
// Instead of conatianing one varlue, it contains a number of name:value pairs, called properties

const myCat = { //Create an object by using curly brackets
    name: 'Jerry', //Separate properties using commas
    breed: 'Burmese',
    age: 14, //like arrays, objects can contain a mixture of value types
    color: 'Brown',
    size: 'small'
}

//Accessing the values in the object

//We can call all of the information contained in the object
console.log(myCat);

//or we can all one value by specifiying the property
console.log(myCat.age);




//Objects can also contain other objects and arrays
const myAunt = {
    name : 'Jackie',
    age : 54,
    occupation : 'Nurse',
    pets : ['Ralph', //A nested Array
            'Spot', 
            'Goldie'], 
    son : { name:'Evan', //A nested object
            age: 35, 
            occupation:'Mechanic', 
            favoriteSport:'Rugby'}
    }


//Access 
console.log(myAunt.pets[1]); //Logs Ralph


//Likewise, arrays can contain objects and other arrays

const someStuff = [
    ['ps5', 'pc', 'xbox1', 'switch'], //A nested array
    sister={name:'Sarah', age: 29, occupation:'student'}, //A nested object
    67, //An integer
    'Dragon Ball Z' //A string
]

//Access
console.log(someStuff[1].occupation);
//Logs student