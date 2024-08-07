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

const modalHeader = document.querySelector(".modal-header");
const wholeSidebar = document.querySelector(".sidebar");
const wholeMiscBar = document.querySelector(".miscBar");
const loginSection = document.querySelector("#loginSection");
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

      modalHeader.textContent = "Logging in ...";
      modalHeader.style.color = "green";

      setTimeout(function () {
        loginSection.classList.add("loggedin");
        wholeSidebar.classList.remove("logoff");
        wholeMiscBar.classList.remove("logoff");
      }, 3000);

      clearInput(playerName);
      clearInput(age);
      clearInput(weight);
      clearInput(height);
    });
};

initializeStats();
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
