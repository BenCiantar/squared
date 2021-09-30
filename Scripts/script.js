//Global variable to pass JSOn data down to other functions
let shapeArray = [];

//Fetch the data from shapes.json and for each object run the function to create a html card containing the data.
    function getShapeData() {
        fetch("../Data/shapes.json")
            .then((response) => response.json())
            .then((shapes) => {
              //Save the array to a global variable for use in other functions
              shapeArray = shapes;
                for (let i = 0; i < shapes.length; i++) {
                    createShapeCard(shapes[i])
                }
            });
        }

//Loop through the json data and create an html card for each shape
function createShapeCard(shape) {
    document.getElementById("shape-list").innerHTML += `
                                <div class="shape-card" onclick=populateCalculator(${shape.id})>
                                  <img src="${shape.cardImage}">
                                  <h3> ${shape.shapeName}</h3>  
                                </div>
                                `;
}

//Onclick populate calculator with data from corresponding shape object
function populateCalculator (shapeId) {
    document.getElementById("form-area").innerHTML = 
                          `
                          
                          <h4>${shapeArray[shapeId].shapeName}</h4>
                          <form action="" method="post" onkeydown="return event.key != 'Enter';">
                            <section class="inputContainer">
                            ${shapeArray[shapeId].form}
                              <br>
                              <section class="outputContainer">
                                <p class="label">Perim: </p> 
                                <div class="output" id="perimeter"></div>
                                <select name="outUnit1" id="outUnit1" class="select" onchange="${shapeArray[shapeId].formula}">
                                <option value="mm">mm</option>
                                <option value="cm" selected="selected">cm</option>
                                  <option value="m">m</option>
                                  <option value="km">km</option>
                                </select>
                              </section>
                              <section class="outputContainer">
                                <p class="label">Area: </p> 
                                <div class="output" id="area"></div>
                                <select name="outUnit2" id="outUnit2" class="select" onchange="${shapeArray[shapeId].formula}">
                                  <option value="mm">mm&sup2;</option>
                                  <option value="cm" selected="selected">cm&sup2;</option>
                                  <option value="m">m&sup2;</option>
                                  <option value="km">km&sup2;</option>
                              </select>
                              </section>
                            </form>
                            
                          </div>
                          `
}

//Toggle phone menu display when clicking menu icon
function togglePhoneMenu() {
  var menu = document.getElementById("phone-menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

//Hide phone menu on screen resize
function hidePhoneMenu(){
var menu = document.getElementById("phone-menu");
menu.style.display = "none";
};