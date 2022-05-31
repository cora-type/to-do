// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { toDo } from "./toDo";
import { createProject } from "./createProject";
initialize(document.body);

let tasks = { unsorted: [] };

let sidebar = document.querySelector(".sidebar");

let createProjectBtn = document.querySelector(".create-project-btn");
let projectForm = document.getElementById("p-form");

let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
let taskList = document.querySelector(".task-list");

//form handlers
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  blurTasks();
  if (projectForm.projectname.value) {
    createProject(sidebar, projectForm.projectname.value);
    tasks[projectForm.projectname.value] = [];
  }
  projectForm.projectname.value = "";
  visibility(e.target);
  console.log(tasks);
});
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new toDo(taskForm);
  console.log(r);
  visibility(e.target);
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  visibility(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  visibility(projectForm);
  blurTasks();
});
//helper function
let visibility = (modal) => {
  modal.style.visibility == "hidden"
    ? (modal.style.visibility = "visible")
    : (modal.style.visibility = "hidden");
};

let blurTasks = () => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
