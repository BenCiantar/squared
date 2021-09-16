
//Fetch the data from shapes.json and for each object run the function to create a html card containing the data
    function getShapeData() {
        fetch("../Data/shapes.json")
            .then((response) => response.json())
            .then((shapes) => {
                for (let i = 0; i < shapes.length; i++) {
                    createShapeCard(shapes[i])
                }
            });
        }

//Function to loop through the json data and create an html card for each shape
function createShapeCard(shape) {
    const wrapper = document.getElementById("shape-list");
    wrapper.innerHTML +=    `<div class="shape-card">
                                <img src="${shape.cardImage}">
                                <h3> ${shape.shapeName}</h3>
                                
                            </div>`;
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