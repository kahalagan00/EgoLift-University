"use strict";

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

      const updatedIntro = `Welcome ${playerName.value}, you are currently ${age.value} years old, weighing in at ${weight.value}lbs and standing at ${height.value} tall.`;

      document.querySelector(".player-introduction").textContent = updatedIntro;

      clearInput(playerName);
      clearInput(age);
      clearInput(weight);
      clearInput(height);
    });
};

const player = {
  name: "",
  age: "",
  weightImperial: "",
  weightMetric: "",
  heightImperial: "",
  heightMetric: "",
};

const exerciseInteraction = function () {
  const ART_PATH = "./bodybuilding_art/";
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
    exercise.addEventListener("click", function (e) {
      document.querySelector(
        ".push-exercise-pic"
      ).src = `${ART_PATH}push_exercises/push${i}.jpg`;

      exercise.classList.add("specific-exercise-active");

      for (let j = 0; j < allExercises.length; ++j) {
        if (allExercises[j] !== exercise)
          allExercises[j].classList.remove("specific-exercise-active");
      }
    });
  });

  pullExercises.forEach(function (exercise, i) {
    exercise.addEventListener("click", function (e) {
      document.querySelector(
        ".pull-exercise-pic"
      ).src = `${ART_PATH}pull_exercises/pull${i}.jpg`;

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
      ).src = `${ART_PATH}leg_exercises/leg${i}.jpg`;

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
