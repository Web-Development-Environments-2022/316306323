"use strict";
// sticky navigation
// const nav = document.getElementById("navbar");
// const headerSection = document.getElementById("header");
// const initalCoords = headerSection.getBoundingClientRect();
// window.addEventListener("scroll", function (e) {
//   if (this.window.scrollY > initalCoords.bottom) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// function handleForm(e) {
//   e.preventDefault();
//   console.log("button clicked!");
// }

const logo = document.getElementById("logo");
window.addEventListener("resize", function (e) {
  if (window.innerWidth < 1350) {
    logo.classList.add("hide-logo");
  } else {
    logo.classList.remove("hide-logo");
  }
});
