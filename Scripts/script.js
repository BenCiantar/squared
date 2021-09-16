
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



if (true && true) {
    console.log('true');
} else {
    console.log('false');
}

if (false && false) {
    console.log('true');
} else {
    console.log('false');
}

if (true && false) {
    console.log('true');
} else {
    console.log('false');
}

if (false && true) {
    console.log('true');
} else {
    console.log('false');
}
