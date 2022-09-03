"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

const Animal = {
  name: "",
  desc: "unknown",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    // split fullname string into array
    const fullnameArray = jsonObject.fullname.split(" ");

    const animal = Object.create(Animal);

    // prototype
    animal.name = fullnameArray[0];
    animal.type = fullnameArray[3];
    animal.desc = fullnameArray[2];
    animal.age = jsonObject.age;

    console.log(Animal);

    allAnimals.push(animal);
console.log(allAnimals);
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
    console.log(`displayList`)
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  console.log(`displayAnimal(animal)`);
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  console.log(`animal name in display`, animal.name);
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
