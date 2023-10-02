// JavaScript Document
console.log("hiii");

var menuButton = document.querySelector("button");
var nav = document.querySelector("main nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("menuOpen");
}