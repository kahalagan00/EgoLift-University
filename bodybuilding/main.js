/** Main script file for the BodyBuilding page */
"use strict";

class Player {
  #name;
  #age;
  #weight;
  #height;
  constructor(name, age, weight, height) {
    this.#name = name;
    this.#age = age;
    this.#weight = weight;
    this.#height = height;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  get height() {
    return this.#height;
  }

  get weight() {
    return this.#weight;
  }

  get heightUS() {
    return this.#height * 39.3701;
  }

  get weightUS() {
    return this.#weight * 2.20462;
  }
}

let user;

/** Handling the filled out information at the top */
const initializeStats = function () {
  const inputError = function (inputBox) {
    inputBox.placeholder = "Please enter valid input";
    inputBox.value = "";
    inputBox.style.backgroundColor = "#F5B7B1";
    inputBox.classList.add("user-input-invalid");
  };

  const clearInput = function (inputBox) {
    inputBox.placeholder = inputBox.dataset.default;
    inputBox.value = "";
    inputBox.style.backgroundColor = "white";
  };

  const playerName = document.getElementById("enteredName");
  const age = document.getElementById("enteredAge");
  const weight = document.getElementById("enteredWeight");
  const height = document.getElementById("enteredHeight");

  document
    .querySelector(".btn-statistics")
    .addEventListener("click", function (e) {
      e.preventDefault();

      if (playerName.value === "") {
        inputError(playerName);
        return;
      }

      /** Checks if values here are only numbers */
      if (!Number(age.value)) {
        inputError(age);
        return;
      }
      if (!Number(weight.value)) {
        inputError(weight);
        return;
      }
      if (!Number(height.value)) {
        inputError(height);
        return;
      }

      user = new Player(
        playerName.value,
        age.value,
        weight.value,
        height.value
      );

      const updatedIntro = `Welcome ${user.name}, you are currently ${user.age} years old, weighing in at ${user.weight} kilograms and standing at ${user.height} meters.`;

      document.querySelector(".player-introduction").textContent = updatedIntro;

      clearInput(playerName);
      clearInput(age);
      clearInput(weight);
      clearInput(height);
    });
};

const exerciseInteraction = function () {
  const IMAGES_PATH = "./assets/images/";
  const pushExercises = document
    .querySelector(".push-routine")
    .querySelectorAll(".specific-exercise");
  const pullExercises = document
    .querySelector(".pull-routine")
    .querySelectorAll(".specific-exercise");
  const legExercises = document
    .querySelector(".legs-routine")
    .querySelectorAll(".specific-exercise");

  const allExercises = [...pushExercises, ...pullExercises, ...legExercises];

  pushExercises.forEach(function (exercise, i) {
    exercise.addEventListener("mousedown", function (e) {
      document.querySelector(
        ".push-exercise-pic"
      ).src = `${IMAGES_PATH}push_exercises/push${i}.jpg`;

      exercise.classList.add("specific-exercise-active");

      for (let j = 0; j < allExercises.length; ++j) {
        if (allExercises[j] !== exercise)
          allExercises[j].classList.remove("specific-exercise-active");
      }
    });

    exercise.addEventListener("mouseup", function (e) {
      allExercises.foreach((exc) =>
        exc.classList.remove("specific-exercise-active")
      );
    });
  });

  pullExercises.forEach(function (exercise, i) {
    exercise.addEventListener("click", function (e) {
      document.querySelector(
        ".pull-exercise-pic"
      ).src = `${IMAGES_PATH}pull_exercises/pull${i}.jpg`;

      exercise.classList.add("specific-exercise-active");

      for (let j = 0; j < allExercises.length; ++j) {
        if (allExercises[j] !== exercise)
          allExercises[j].classList.remove("specific-exercise-active");
      }
    });
  });

  legExercises.forEach(function (exercise, i) {
    exercise.addEventListener("click", function (e) {
      document.querySelector(
        ".leg-exercise-pic"
      ).src = `${IMAGES_PATH}leg_exercises/leg${i}.jpg`;

      exercise.classList.add("specific-exercise-active");

      for (let j = 0; j < allExercises.length; ++j) {
        if (allExercises[j] !== exercise)
          allExercises[j].classList.remove("specific-exercise-active");
      }
    });
  });
};

initializeStats();
exerciseInteraction();
console.log("SHARKFATS");

/** Checkbox functionality  */
document
  .getElementById("maleCheckbox")
  .addEventListener("change", function (e) {
    e.preventDefault();
    if (this.checked) {
      console.log("Male is checked");
    } else {
      console.log("Make is unchecked");
    }
  });

console.log(document.getElementById("maleCheckbox"));

/** Sidebar functionality */
const sideBarOpt = document.querySelectorAll(".nav-link");
sideBarOpt.forEach((opt) => {
  opt.addEventListener("click", function (e) {
    e.preventDefault();
    sideBarOpt.forEach((opt) => opt.classList.remove("nav-link-active"));
    opt.classList.add("nav-link-active");
  });
});

const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const sideBarLinks = document.querySelectorAll(".nav-link");

sideBarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    section2.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
});
