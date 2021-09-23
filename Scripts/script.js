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

//Function to loop through the json data and create an html card for each shape
function createShapeCard(shape) {
    document.getElementById("shape-list").innerHTML += `
                                <div class="shape-card" onclick=populateCalculator(${shape.id})>
                                  <img src="${shape.cardImage}">
                                  <h3> ${shape.shapeName}</h3>  
                                </div>
                                `;
}

//Function to onclick populate calculator with data from corresponding shape object
function populateCalculator (shapeId) {
    document.getElementById("calc-area").innerHTML = 
                          `
                          <img src="${shapeArray[shapeId].calcImage}" alt="Image of ${shapeArray[shapeId].shapeName}">
                          
                          <p>${shapeArray[shapeId].shapeName}</p>

                            ${shapeArray[shapeId].form}
                              <br>
                              <section class="outputContainer">
                                <p class="label">Perimeter: </p> 
                                <div class="output" id="perimeter"></div>
                                <select name="outUnit1" id="outUnit1">
                                  <option value="cm">cm</option>
                                  <option value="mm">mm</option>
                                  <option value="m">m</option>
                                  <option value="km">km</option>
                                </select>
                              </section>
                              <section class="outputContainer">
                                <p class="label">Area: </p> 
                                <div class="output" id="area"></div>
                                <select name="outUnit2" id="outUnit2" onblur="${shapeArray[shapeId].formula}">
                                  <option value="cm">cm2</option>
                                  <option value="mm">mm2</option>
                                  <option value="m">m2</option>
                                  <option value="km">km2</option>
                              </select>
                              </section>
                            </form>
                          </div>
                          `
}

//Function to toggle phone menu display when clicking menu icon
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