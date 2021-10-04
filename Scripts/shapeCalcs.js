
//Functions for calculating each type of shape


//SQUARE

function calculatorSquare() {  

    let n1 = parseInt(document.getElementById('n1').value, 10);
    let num1 = n1;

    let unit1 = document.getElementById('unit1').value;

    //Convert input 1 to mm
    if (unit1 == "mm") {
        n1 = n1;
    } else if (unit1 == "cm") {
        n1 = n1 * 10;
    } else if (unit1 == "m") {
        n1 = n1 * 1000;
    } else if (unit1 == "km") {
        n1 = n1 * 1000000;
    }

    let outUnit1 = document.getElementById('outUnit1').value;
    if (n1 > 0) {
        //Convert from mm to desired output unit
        //Copy n1 into num 1 to avoid interfering with second output function
        if (outUnit1 == "mm") {
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(2);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(2);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(2);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(2);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(2);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(2);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(2);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(2);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}



//RECTANGLE

function calculatorRectangle() {
    let n1 = parseInt(document.getElementById('n1').value, 10);
    let num1 = n1;

    let unit1 = document.getElementById('unit1').value;

    //Convert input 1 to mm
    if (unit1 == "mm") {
        n1 = n1;
    } else if (unit1 == "cm") {
        n1 = n1 * 10;
    } else if (unit1 == "m") {
        n1 = n1 * 1000;
    } else if (unit1 == "km") {
        n1 = n1 * 1000000;
    }

    let n2 = parseInt(document.getElementById('n2').value, 10);
    let num2 = n2;

    let unit2 = document.getElementById('unit2').value;

    //Convert unit 2 to mm
    if (unit2 == "mm") {
        n2 = n2;
    } else if (unit2 == "cm") {
        n2 = n2 * 10;
    } else if (unit2 == "m") {
        n2 = n2 * 1000;
    } else if (unit2 == "km") {
        n2 = n2 * 1000000;
    }

    let outUnit1 = document.getElementById('outUnit1').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output perimeter
        if (outUnit1 == "mm") {
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(2);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(2);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(2);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(2);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(2);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(2);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(2);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(2);
        }
    }
    return false;
} 



//CIRCLE
function calculatorCircle() {  

    let pi = Math.PI;

    let n1 = parseInt(document.getElementById('n1').value, 10);
    let num1 = n1;

    let unit1 = document.getElementById('unit1').value;

    //Convert input 1 to mm
    if (unit1 == "mm") {
        n1 = n1;
    } else if (unit1 == "cm") {
        n1 = n1 * 10;
    } else if (unit1 == "m") {
        n1 = n1 * 1000;
    } else if (unit1 == "km") {
        n1 = n1 * 1000000;
    }

    let outUnit1 = document.getElementById('outUnit1').value;
    if (n1 > 0) {
        //Convert from mm to desired output unit
        //Copy n1 into num 1 to avoid interfering with second output function
        if (outUnit1 == "mm") {
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(2);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(2);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(2);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(2);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(2);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(2);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(2);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(2);
        }
    }
    return false;
}


//OCTAGON






//HEXAGON

function calculatorHexagon() {  

    let n1 = parseInt(document.getElementById('n1').value, 10);
    let num1 = n1;

    let unit1 = document.getElementById('unit1').value;

    //Convert input 1 to mm
    if (unit1 == "mm") {
        n1 = n1;
    } else if (unit1 == "cm") {
        n1 = n1 * 10;
    } else if (unit1 == "m") {
        n1 = n1 * 1000;
    } else if (unit1 == "km") {
        n1 = n1 * 1000000;
    }

    let outUnit1 = document.getElementById('outUnit1').value;
    if (n1 > 0) {
        //Convert from mm to desired output unit
        //Copy n1 into num 1 to avoid interfering with second output function
        if (outUnit1 == "mm") {
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(2);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(2);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(2);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(2);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(2);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(2);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(2);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(2);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}
