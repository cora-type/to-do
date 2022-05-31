// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { toDo } from "./toDo";
import { createProject } from "./createProject";
import { displayUpdate } from "./displayUpdate";
import { createTask } from "./createTask";
import { visibility, blurTasks, selector } from "./styleHelper";
initialize(document.body);

let tasks = { unsorted: [] };

let createProjectBtn = document.querySelector(".create-project-btn");
let projectForm = document.getElementById("p-form");
let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
let taskDisplay = document.querySelector(".task-display");

let sidebarContainer = document.querySelector(".sidebar");
let unsorted = document.getElementById("unsorted");
let allTasks = document.getElementById("all");

//form handlers
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  blurTasks(taskDisplay);
  if (projectForm.projectname.value) {
    tasks[projectForm.projectname.value] = []; //create a project key
    createProject(sidebarContainer, projectForm.projectname.value, tasks, taskDisplay);
  }
  projectForm.projectname.value = "";
  visibility(e.target);
});

taskForm.addEventListener("submit", function (e) {
  let active = document.querySelector(".active"); //get currently active project
  e.preventDefault();
  let task = new toDo(taskForm); //create a new task from form
  tasks[active.id].push(task); // get current project key from id, add to list
  displayUpdate(tasks, active.id, taskDisplay);
  visibility(e.target);

  console.log(tasks);
});

//load default project tasks
unsorted.addEventListener("click", function () {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  this.classList.add("active");
  selector();
  this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  displayUpdate(tasks, "unsorted", taskDisplay);
});
allTasks.addEventListener("click", function () {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  unsorted.classList.add("active");
  selector();
  this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  Object.keys(tasks).forEach((key) => {
    displayUpdate(tasks, key, taskDisplay);
  });
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  visibility(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  visibility(projectForm);
  blurTasks(taskDisplay);
});
