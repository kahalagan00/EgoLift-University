"use strict";

/** Grab current date */
const currentDate = document.querySelector(".footer-date");
currentDate.textContent = new Date().getFullYear();

/** Main components  */
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");
const section4 = document.querySelector("#section-4");

const navHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

const navInteraction = function () {
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (link.textContent === "About") {
        section1.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (link.textContent === "Developer") {
        section2.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (link.textContent === "Paths") {
        section3.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } else if (link.textContent === "Diet") {
        section4.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    });
  });

  nav.addEventListener("mouseover", navHover.bind(0.5));
  nav.addEventListener("mouseout", navHover.bind(1));
};

const navStickyScroll = function () {
  const navHeight = nav.getBoundingClientRect().height;
  const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  };
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(section1);
};

const sectionFadeIn = function () {
  const [...allSections] = [section1, section2, section3, section4];

  const revealSection = function (entries, observer) {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");

    // Prevents observing when scrolling back up to the section
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.4, // Section starts fading in to the view when it is 15% visible
  });

  allSections.forEach((section) => sectionObserver.observe(section));
};

const pathsInteraction = function () {
  /** Main training paths section elements  */
  const pathsMenuBar = document.querySelector(".paths-menu");
  const pathProfiles = document.querySelectorAll(".path-profile");
  const pathProfilesButtons = document.querySelectorAll(".path-profile-btn");
  const enrollmentLinks = document.querySelectorAll(".enrollment-link");

  /** Main interactivity with the training paths */
  pathsMenuBar.addEventListener("click", function (event) {
    // event.preventDefault();
    const clicked = event.target.closest(".path-profile-btn");
    if (!clicked) return;
    // else console.log(clicked);

    pathProfilesButtons.forEach((button) => {
      button.classList.remove("path-profile-btn-active");
      button.nextElementSibling.classList.remove("path-profile-content-active");
    });

    clicked.classList.add("path-profile-btn-active");
    clicked.nextElementSibling.classList.add("path-profile-content-active");

    enrollmentLinks.forEach((link) => {
      if (
        link === clicked.nextElementSibling.querySelector(".enrollment-link")
      ) {
        link.classList.add("enrollment-link-active");
      } else {
        link.classList.remove("enrollment-link-active");
      }
    });
  });
};

const dietInteraction = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn-left");
  const btnRight = document.querySelector(".slider-btn-right");
  let curSlide = 0;
  const maxSlides = slides.length;

  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );

  btnRight.addEventListener("click", function (e) {
    curSlide--;
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i + curSlide)}%)`)
    );
  });

  btnLeft.addEventListener("click", function (e) {
    curSlide++;
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i + curSlide)}%)`)
    );
  });
};

navInteraction();
pathsInteraction();
navStickyScroll();
sectionFadeIn();
dietInteraction();
