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

/** Navigation bar interactivity */
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

/** Section loading  */
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

/** Training paths section interactivity */
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

/** Diet Plans section interactivity */
const dietInteraction = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn-left");
  const btnRight = document.querySelector(".slider-btn-right");
  const maxSlides = slides.length;
  const dots = document.querySelectorAll(".dots-dot");
  let curSlide = 0;

  // Change the slides and highlight corresponding dot
  const moveSlide = function (offset) {
    dots.forEach((dot) => dot.classList.remove("dots-dot-active"));
    dots[Math.abs(offset)].classList.add("dots-dot-active");
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${100 * (i + offset)}%)`)
    );
  };

  const nextSlide = function () {
    curSlide--;
    if (curSlide * -1 === maxSlides) curSlide = 0;
    // console.log(`btnRight, curSlide = ${curSlide}`);
    moveSlide(curSlide);
  };

  const prevSlide = function () {
    curSlide++;
    if (curSlide > 0) curSlide = (maxSlides - 1) * -1;
    // console.log(`btnLeft, curSlide = ${curSlide}`);
    moveSlide(curSlide);
  };

  moveSlide(0); // Initialize all pictures in the starting position

  btnRight.addEventListener("click", nextSlide);

  btnLeft.addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function (e) {
      if (i > Math.abs(curSlide)) {
        nextSlide();
      } else if (i < Math.abs(curSlide)) {
        prevSlide();
      }
    });
  });
};

/** Main functions calls */
navInteraction();
navStickyScroll();
pathsInteraction();
sectionFadeIn();
dietInteraction();
