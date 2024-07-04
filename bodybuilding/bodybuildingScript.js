"use strict";

const inputError = function (inputBox) {
  inputBox.placeholder = "Please enter a valid input";
  inputBox.value = "";
  inputBox.style.backgroundColor = "#F5B7B1";
};

const clearInput = function (inputBox) {
  inputBox.placeholder = inputBox.dataset.default;
  inputBox.value = "";
  inputBox.style.backgroundColor = "white";
};

const player = {
  name: "",
  age: "",
  weightImperial: "",
  weightMetric: "",
  heightImperial: "",
  heightMetric: "",
};

const playerName = document.getElementById("enteredName");
const age = document.querySelector(".entered-age");
const weight = document.querySelector(".entered-weight");
const height = document.querySelector(".entered-height");

document
  .querySelector(".btn-statistics")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (playerName.value === "") {
      inputError(playerName);
      return;
    }

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

console.log("SHARKFATS");
// console.log(Number("23f"));
