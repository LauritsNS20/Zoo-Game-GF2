// DOM REFERENCER
const pointBox = document.querySelector("#score"); //point tavle
const dragFoodBox = document.querySelectorAll(".foodcontainer article"); //mad
const targetAnimal = document.querySelectorAll("#animals div"); //dyrene
const foodBox = document.querySelector(".foodcontainer"); //madkassen

// EVENTS på elementerne

dragFoodBox.forEach(function(element){
    element.addEventListener("dragstart",startDrag);
})

targetAnimal.forEach(function(element){
    element.addEventListener("dragover", cancelDefault)
    element.addEventListener("drop", dropMad)
})

// FUNKTIONER

function startDrag(event){
    // console.log(this.dataset.food);
    event.dataTransfer.setData("foodId", this.id);
    event.dataTransfer.setData("foodName", this.dataset.food);
}

function cancelDefault(event) {
    event.preventDefault();
    //kan bruges til at "aflyse" eventet
}

function dropMad(event) {
    // console.log("Der er droppet mad");
    let madId = event.dataTransfer.getData("foodId");
    let madType = event.dataTransfer.getData("foodName");

    if (madType == this.dataset.food || madType == this.dataset.food2) {
        let heart = document.createTextNode("💚");
        this.appendChild(heart);
        pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    } else {
        alert("Forkert!")
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
        foodBox.removeChild(document.querySelector("#" + madId));
    }
}