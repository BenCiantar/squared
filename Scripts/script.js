//Global variable to pass JSON data down to other functions
let shapeArray = [];

//Called onload, run all of these functions when body loads
function init () {
  getShapeData();
  changeIcon(0);
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
    shapesObserver(); //Run here after shape-list has been populated
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
var morpheusOptions = {
  easing: "expo-in-out", //Fiddle with this
  duration: 1000,
  rotation: "none",
}

var arrayOfIcons = ["blob", "square", "rectangle", "circle", "octagon", "eq-triangle", "hexagon", "pentagon", "heptagon", "nonagon", "parallelogram", "rhombus", "right-triangle", "scalene-triangle", "oval"];
var myIcons = new SVGMorpheus("#iconSet", morpheusOptions);

function changeIcon(id) {
  myIcons.to(arrayOfIcons[id]);

  if (id == 0) {
    document.getElementById("iconSet").classList.add("blob");
  } else {
    document.getElementById("iconSet").classList.remove("blob");
  }

}


//Set the wrapper to observe and the % of card that must be within the wrapper to trigger the observer
let observerOptions = {
  root: document.getElementById("shape-list"),
  threshold: 0.4
}

//Assign a function to the variable observer that observes each shape card and checks if it is intersecting shape-list
//Called on each loop of shapesObserver on each shape-card placed in the array
let observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    //Checks if the elements started in view or have been in view, and assigns them a class to revert to normal appearance
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('been-in-view');
    } else {
      entries[i].target.classList.remove("been-in-view");
    }
  }
}, observerOptions);

//Change appearance of shape cards as they transition into view by looping through all shape cards and running the observer 
function shapesObserver() {
  let array = document.querySelectorAll('.shape-card');
    for (let i = 0; i < array.length; i++) {
    observer.observe(array[i]);
    }
  }





  
