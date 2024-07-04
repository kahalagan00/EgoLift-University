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

initializeStats();
console.log("SHARKFATS");
