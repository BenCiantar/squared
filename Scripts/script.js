//Global variable to pass JSOn data down to other functions
let shapeArray = [];

//Called onload, run all of these functions when body loads
function init () {
  getShapeData();
  changeIcon(0);
  // shapesObserver(); WIP
}

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
                                <div class="shape-card" onclick=shapeChange(${shape.id})>
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

function shapeChange(id) {
  populateCalculator(id - 1); //Reduce by 1 to correct for position in array
  changeIcon(id);
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



//Main shape transformation function
var options = {
  // easing: "ease",
  duration: 1000,
  rotation: "none",
}

var arrayOfIcons = ["blob", "square", "rectangle", "circle", "octagon", "eq-triangle", "hexagon", "pentagon", "heptagon", "nonagon", "parallelogram", "rhombus", "right-triangle", "scalene-triangle", "oval"];
var myIcons = new SVGMorpheus("#iconSet", options);

function changeIcon(id) {
  myIcons.to(arrayOfIcons[id]);
  console.log(arrayOfIcons[id]);
  console.log(id);

  if (id == 0) {
    document.getElementById("iconSet").classList.add("blob");
  } else {
    document.getElementById("iconSet").classList.remove("blob");
  }

}


//Function to animate shape cards as they transition into view WIP
// function shapesObserver() {
//   const options = { 
//     root: document.getElementById("shape-list"), 
//     threshold: 0.5
//     } 
    
//     function callback (entries) { 
//       let array = document.querySelectorAll('.shape-card'); 

//       let observer = new IntersectionObserver(callback, options);

//       for (let i = 0; i < target.length; i++) { 
//       observer.observe(array[i]); 
//       console.log(array);
//       }
//     }
//   }