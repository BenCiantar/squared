
//Functions for calculating each type of shape


//SQUARE

function calculatorSquare() {    
    let n1 = parseInt(document.getElementById('n1').value, 10);

    let unit1 = document.getElementById('unit1').value;

    console.log(n1);
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

    console.log(n1); //Returns 100 (mm)

    let outUnit1 = document.getElementById('outUnit1').value;
    
    //Convert from mm to desired output unit
    if (outUnit1 == "mm") {
        document.getElementById('perimeter').innerHTML = num1 *4;
    } else if (outUnit1 == "cm") {
        let num1 = n1 / 10;
        document.getElementById('perimeter').innerHTML = num1 *4;
    } else if (outUnit1 == "m") {
        let num1 = n1 / 1000;
        document.getElementById('perimeter').innerHTML = num1 *4;
    } else if (outUnit1 == "km") {
        let num1 = n1 / 1000000;
        document.getElementById('perimeter').innerHTML = num1 *4;    
    }

    let outUnit2 = document.getElementById('outUnit2').value;
    console.log(outUnit2);
    console.log(n1);
    //Convert from mm to desired output unit
    if (outUnit2 == "mm") {
        document.getElementById('area').innerHTML = n1 * n1;
    } else if (outUnit2 == "cm") {
        console.log(n1);
        n1 = n1 / 10;
        document.getElementById('area').innerHTML = n1 * n1;
    } else if (outUnit2 == "m") {
        n1 = n1 / 1000;
        document.getElementById('area').innerHTML = n1 * n1;
    } else if (outUnit2 == "km") {
        n1 = n1 / 1000000;
        document.getElementById('area').innerHTML = n1 * n1;
    } else {
        document.getElementById('perimeter').innerHTML = "Output not working"; 
    }
  }

















//RECTANGLE

  function calculatorRectangle() {
    let n1 = parseInt(document.getElementById('n1').value, 10);
    //Convert input 1 to mm
    if (unit1 == "mm") {
        n1 = n1;
    } else if (unit1 == "cm") {
        n1 = n1 / 10;
    } else if (unit1 == "m") {
        n1 = n1 / 1000;
    } else if (unit1 == "km") {
        n1 = n1 / 1000000;
    }

    let n2 = parseInt(document.getElementById('n2').value, 10);
    //Convert unit 2 to mm
    if (unit2 == "mm") {
        n2 = n2;
    } else if (unit2 == "cm") {
        n2 = n2 / 10;
    } else if (unit2 == "m") {
        n2 = n2 / 1000;
    } else if (unit2 == "km") {
        n2 = n2 / 1000000;
    }

    //Convert from mm to desired output unit
    if (outUnit1 == "mm") {
        document.getElementById('perimeter').innerHTML = n1 + n1 + n2 + n2;
    } else if (outUnit1 == "cm") {
        n1 = n1 / 10;
        n2 = n2 / 10;
        document.getElementById('perimeter').innerHTML = n1 + n1 + n2 + n2;
    } else if (outUnit1 == "m") {
        n1 = n1 / 1000;
        n2 = n2 / 1000;
        document.getElementById('perimeter').innerHTML = n1 + n1 + n2 + n2;
    } else if (outUnit1 == "km") {
        n1 = n1 / 1000000;
        n2 = n2 / 1000000;
        document.getElementById('perimeter').innerHTML = n1 + n1 + n2 + n2;
    }

    //Convert from mm to desired output unit    
    if (outUnit1 == "mm") {
        document.getElementById('area').innerHTML = n1 * n2 + "<sup>2</sup>";
    } else if (outUnit1 == "cm") {
        n1 = n1 / 10;
        n2 = n2 / 10;
        document.getElementById('area').innerHTML = n1 * n2 + "<sup>2</sup>";
    } else if (outUnit1 == "m") {
        n1 = n1 / 1000;
        n2 = n2 / 1000;
        document.getElementById('area').innerHTML = n1 * n2 + "<sup>2</sup>";
    } else if (outUnit1 == "km") {
        n1 = n1 / 1000000;
        n2 = n2 / 1000000;
        document.getElementById('area').innerHTML = n1 * n2 + "<sup>2</sup>";
    }
  } 