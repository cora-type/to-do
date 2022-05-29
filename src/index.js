// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";

import { initialize } from "./pageLoad";
import { toDo } from "./toDo";

initialize(document.body);

let projects = document.querySelectorAll(".link");

let createProjectBtn = document.querySelector(".create-project-btn");
let projectForm = document.getElementById("p-form");

let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");

let taskList = document.querySelector(".task-list");

let todos = [];

let blurTasks = () => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};

//make task form visible
createTaskBtn.addEventListener("click", function () {
  visibility(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  visibility(projectForm);
  blurTasks();
});

//form handlers
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push(projectForm.projectname.value);
  projectForm.projectname.value = "";
  console.log(todos);
  blurTasks();
  visibility(e.target);
});
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new toDo(taskForm);
  console.log(r);
  visibility(e.target);
});

projects.forEach((result, id) => {
  result.addEventListener("click", function () {
    //load tasks from object that matches with this name, add future tasks to this same object
  });
});

//helper function
let visibility = (modal) => {
  modal.style.visibility == "hidden"
    ? (modal.style.visibility = "visible")
    : (modal.style.visibility = "hidden");
};
