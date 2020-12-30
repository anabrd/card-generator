function showCard() {
    document.getElementById("front-preview-container").innerHTML += localStorage.getItem("frontSide");
    document.getElementById("back-preview-container").innerHTML += localStorage.getItem("backSide");
    document.getElementById("front-preview-container").style.backgroundImage = localStorage.getItem("frontImage");
    document.getElementById("back-preview-container").style.backgroundImage = localStorage.getItem("borderImage");
}