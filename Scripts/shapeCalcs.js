//Assign pi variable
let pi = Math.PI;

//Calculate cotangents
function cot(x) { return (1 / Math.tan(x)); }


//Functions for calculating perimeter and area of each shape

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
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 4).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (n1 * n1).toFixed(1);
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
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        }
    }
    return false;
} 


//CIRCLE
function calculatorCircle() {  

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
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (2 * pi * num1).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (pi * (n1 * n1)).toFixed(1);
        }
    }
    return false;
}


//OCTAGON
function calculatorOctagon() {  

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
            document.getElementById('perimeter').innerHTML = (num1 * 8).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 8).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 8).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 8).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (2 * (1 + (Math.sqrt(2))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (2 * (1 + (Math.sqrt(2))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (2 * (1 + (Math.sqrt(2))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (2 * (1 + (Math.sqrt(2))) * (n1 * n1)).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}


//Equilateral Triangle
function calculatorEqTriangle() {  

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
            document.getElementById('perimeter').innerHTML = (num1 * 3).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 3).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 3).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 3).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (((Math.sqrt(3)) / 4) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = (((Math.sqrt(3)) / 4) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = (((Math.sqrt(3)) / 4) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = (((Math.sqrt(3)) / 4) * (n1 * n1)).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}


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
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 6).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = ((3 * (Math.sqrt(3)) * (n1 * n1)) / 2).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}


//PENTAGON

function calculatorPentagon() {  

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
            document.getElementById('perimeter').innerHTML = (num1 * 5).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 5).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 5).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 5).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((1 / 4) * (Math.sqrt(5 * (5 + (2 * (Math.sqrt(5)))))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = ((1 / 4) * (Math.sqrt(5 * (5 + (2 * (Math.sqrt(5)))))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = ((1 / 4) * (Math.sqrt(5 * (5 + (2 * (Math.sqrt(5)))))) * (n1 * n1)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = ((1 / 4) * (Math.sqrt(5 * (5 + (2 * (Math.sqrt(5)))))) * (n1 * n1)).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}



//HEPTAGON

function calculatorHeptagon() {  

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
            document.getElementById('perimeter').innerHTML = (num1 * 7).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 7).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 7).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 7).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((7 / 4) * ((n1 * n1) / Math.tan(pi / 7))).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = ((7 / 4) * ((n1 * n1) / Math.tan(pi / 7))).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = ((7 / 4) * ((n1 * n1) / Math.tan(pi / 7))).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = ((7 / 4) * ((n1 * n1) / Math.tan(pi / 7))).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}


//NONAGON

function calculatorNonagon() {  
    console.log("nonagon running");
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
            document.getElementById('perimeter').innerHTML = (num1 * 9).toFixed(1);
        } else if (outUnit1 == "cm") {
            let num1 = n1 / 10;
            document.getElementById('perimeter').innerHTML = (num1 * 9).toFixed(1);
        } else if (outUnit1 == "m") {
            let num1 = n1 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 * 9).toFixed(1);
        } else if (outUnit1 == "km") {
            let num1 = n1 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 * 9).toFixed(1);    
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0) {
        //Convert from mm to desired output unit
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((9 / 4) * (n1 * n1) * cot(pi / 9)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            document.getElementById('area').innerHTML = ((9 / 4) * (n1 * n1) * cot(pi / 9)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            document.getElementById('area').innerHTML = ((9 / 4) * (n1 * n1) * cot(pi / 9)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            document.getElementById('area').innerHTML = ((9 / 4) * (n1 * n1) * cot(pi / 9)).toFixed(1);
        }
    }
    return false; //Prevent the form from submitting if enter is pressed
}


//PARALLELOGRAM

function calculatorParallelogram() {
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
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = (n1 * n2).toFixed(1);
        }
    }
    return false;
} 


//RHOMBUS

function calculatorRhombus() {
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
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        }
    }
    return false;
} 


//RIGHT TRIANGLE

function calculatorRightTriangle() {
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
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = ((n1 * n2) / 2).toFixed(1);
        }
    }
    return false;
} 


//OVAL

function calculatorOval() {
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
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "cm") {
            num1 = n1 / 10;
            num2 = n2 / 10;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "m") {
            num1 = n1 / 1000;
            num2 = n2 / 1000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else if (outUnit1 == "km") {
            num1 = n1 / 1000000;
            num2 = n2 / 1000000;
            document.getElementById('perimeter').innerHTML = (num1 + num1 + num2 + num2).toFixed(1);
        } else {
            console.log("Please enter two valid numbers");
        }
    }

    let outUnit2 = document.getElementById('outUnit2').value;

    if (n1 > 0 && n2 > 0) {
        //Convert from mm to desired output unit and output area  
        if (outUnit2 == "mm") {
            document.getElementById('area').innerHTML = (pi * (n1 / 2) * (n2 / 2)).toFixed(1);
        } else if (outUnit2 == "cm") {
            n1 = n1 / 10;
            n2 = n2 / 10;
            document.getElementById('area').innerHTML = (pi * (n1 / 2) * (n2 / 2)).toFixed(1);
        } else if (outUnit2 == "m") {
            n1 = n1 / 1000;
            n2 = n2 / 1000;
            document.getElementById('area').innerHTML = (pi * (n1 / 2) * (n2 / 2)).toFixed(1);
        } else if (outUnit2 == "km") {
            n1 = n1 / 1000000;
            n2 = n2 / 1000000;
            document.getElementById('area').innerHTML = (pi * (n1 / 2) * (n2 / 2)).toFixed(1);
        }
    }
    return false;
} 