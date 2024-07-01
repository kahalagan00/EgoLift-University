"use strict";

/** Grab current date */
const currentDate = document.querySelector(".footer-date");
currentDate.textContent = new Date().getFullYear();

/** Main page links and sections elements */
const aboutLink = document.querySelector(".about-link");
const developerLink = document.querySelector(".developer-link");
const pathsLink = document.querySelector(".paths-link");
const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");

/** Main training paths section elements  */
const pathsMenuBar = document.querySelector(".paths-menu");
const pathProfiles = document.querySelectorAll(".path-profile");
const pathProfilesButtons = document.querySelectorAll(".path-profile-btn");

/** Main scrolling to the sections */
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicked on About");
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

developerLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicked on Developer");
  section2.scrollIntoView({
    behavior: "smooth",
  });
});

pathsLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Clicked on Paths");
  section3.scrollIntoView({
    behavior: "smooth",
  });
});

/** Main interactivity with the training paths */
pathsMenuBar.addEventListener("click", function (event) {
  event.preventDefault();
  const clicked = event.target.closest(".path-profile-btn");
  if (!clicked) return;
  else console.log(clicked);

  pathProfilesButtons.forEach((button) => {
    button.classList.remove("path-profile-btn-active");
    button.nextElementSibling.classList.remove("path-profile-content-active");
  });

  clicked.classList.add("path-profile-btn-active");
  clicked.nextElementSibling.classList.add("path-profile-content-active");
});

console.log("fat");
