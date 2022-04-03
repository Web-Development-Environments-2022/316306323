"use strict";
// sticky navigation
const nav = document.getElementById("navbar");
const aboutSection = document.getElementById("about");
const initalCoords = aboutSection.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > initalCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// function handleForm(e) {
//   e.preventDefault();
//   console.log("button clicked!");
// }
