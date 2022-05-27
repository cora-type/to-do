// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";

import { initialize } from "./pageLoad";
import { toDo } from "./toDo";

initialize(document.body);

let projectButtons = document.querySelectorAll(".link");
let createProjectBtn = document.querySelector(".create-project-btn");
let taskFormBtn = document.querySelector(".task-form-btn");

let taskList = document.querySelector(".task-list");
let taskForm = document.getElementById("task-form");
let projectForm = document.getElementById("project-form");

let todos = [];

taskFormBtn.addEventListener("click", function () {
  visibility(taskForm);
});

createProjectBtn.addEventListener("click", function () {
  visibility(projectForm);
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
});

projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(projectForm.name);
});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new toDo(taskForm);
  todos.push(r);
  console.log(todos);
});

projectButtons.forEach((result, id) => {
  result.addEventListener("click", function () {
    //load tasks from object that matches with this name, add future tasks to this same object
  });
});

let visibility = (modal) => {
  modal.style.visibility == "hidden"
    ? (modal.style.visibility = "visible")
    : (modal.style.visibility = "hidden");
};
