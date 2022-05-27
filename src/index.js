// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";

import { initialize } from "./pageLoad";
import { toDo } from "./toDo";

initialize(document.body);

let projectButtons = document.querySelectorAll(".link");
let createProjectBtn = document.querySelector(".create-project-btn");
let addBtn = document.querySelector(".add");
let form = document.getElementById("task-form");

let todos = [];

addBtn.addEventListener("click", function () {
  form.style.visibility == "hidden"
    ? (form.style.visibility = "visible")
    : (form.style.visibility = "hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new toDo(form);
  todos.push(r);
  console.log(todos);
});

projectButtons.forEach((result, id) => {
  result.addEventListener("click", function () {
    //load tasks from object that matches with this name, add future tasks to this same object
  });
});
