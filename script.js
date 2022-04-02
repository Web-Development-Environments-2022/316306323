"use strict";
// sticky navigation
const nav = document.getElementById("navbar");
console.log(nav);
const aboutSection = document.getElementById("about");
console.log(aboutSection);
const initalCoords = aboutSection.getBoundingClientRect();
console.log(initalCoords);
window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > initalCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
