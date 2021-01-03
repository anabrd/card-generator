// GLOBAL VARIABLES START
// For Front
let imgLink;
var colorPicker;
let frontPreview = document.getElementById("front-preview-container");
let frontMessage = document.getElementById("front-message");
let frontMessagePreview = document.getElementById("front-message-preview");

// For back
let borderLink;
let backPreview = document.getElementById("back-preview-container");
let backMessage = document.getElementById("back-message");
let backMessagePreview = document.getElementById("back-message-preview");

let from = document.getElementById("from");
let to = document.getElementById("to");
// GLOBAL VARIABLES END


// FUNCTIONS START

// Function that's applied to the img container and waits for a click
// It detects which element has been clicked and extracts the value of the "src" attribute in the <img> element
// Uses that link for the background image of the front preview div
document.getElementById("img-container").addEventListener('click', (event) => {
    imgLink = event.target.getAttribute('src');
    frontPreview.style.backgroundImage = `url(${imgLink})`;
});

// Function to read the custom link input value and change background image styling of front preview div
function addCustomURL() {
    imgLink = document.getElementById("custom-url").value;
    frontPreview.style.backgroundImage = `url(${imgLink})`;
}

// Function to detect user typing input into the textarea, renders text as user types in front preview div
frontMessage.onkeyup = frontMessage.onkeypress = function () {
    frontMessagePreview.innerHTML = this.value;
}

// Function to read the font option from select dropdown menu and change the font styling in the front preview div
function changeFont() {
    let fontChoice = document.getElementById("font-choice");
    frontMessagePreview.style.fontFamily = fontChoice.value;
}

// Function to preview back message preview
backMessage.onkeyup = backMessage.onkeypress = function () {
    backMessagePreview.innerHTML = this.value;
}

// Function to preview sender
from.onkeyup = from.onkeypress = function () {
    sender.innerHTML = this.value;
}

// Function to preview recepient
to.onkeyup = to.onkeypress = function () {
    recepient.innerHTML = this.value;
}

// Function to preview border
document.getElementById("border-container").addEventListener('click', (event) => {
    borderLink = event.target.getAttribute('src');
    backPreview.style.backgroundImage = `url(${borderLink})`;
});

// Function to store card HTML and styling into local storage
function generateCard() {
    localStorage.setItem("frontSide", document.getElementById("front-preview-container").innerHTML);
    localStorage.setItem("backSide", document.getElementById("back-preview-container").innerHTML);
    localStorage.setItem("frontImage", document.getElementById("front-preview-container").style.backgroundImage);
    localStorage.setItem("borderImage", document.getElementById("back-preview-container").style.backgroundImage);
}

// Function for color picker
window.addEventListener("load", colorPicker, false); // Once the page is loaded, call fucntion colorPicker():

function colorPicker() {
    colorPicker = document.querySelector("#colorPicker"); // .querySelectorAll looks for all the matching HTML elements.
    colorPicker.addEventListener("input", updateFirst, false); // Event listener trigerred every time the color changes 
}

function updateFirst(event) {           //Function to update all color values in elements fitting the .querySelector parameter
    var pre = document.querySelector("pre");
    if (pre) {pre.style.color = event.target.value;}
}
// FUNCTIONS END