// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { toDo } from "./toDo";
import { createProject } from "./createProject";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility, blurTasks, selector } from "./styleHelper";
import { addTasks } from "./addTasks";
initialize(document.body);

let createProjectBtn = document.querySelector(".create-project-btn");
let projectFormModal = document.querySelector(".p-form-modal");
let projectForm = document.getElementById("p-form");
let createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
let taskDisplay = document.querySelector(".task-display");

let sidebarContainer = document.querySelector(".sidebar");
let unsorted = document.getElementById("unsorted");
let allTasks = document.getElementById("all");

let tasks = { unsorted: [] };

//form handlers
projectForm.addEventListener("submit", function (e) {
  let name = this.projectname.value;
  e.preventDefault();
  blurTasks(taskDisplay);
  if (name) {
    tasks[name] = []; //create a project key
    createProject(sidebarContainer, name, tasks, taskDisplay);
  }
  this.reset();
  visibility(e.target);
});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let active = document.querySelector(".active"); //get currently active project
  let task = new toDo(taskForm); //create a new task from form
  tasks[active.id].push(task); // get current project key from id, add task to list
  displayUpdate(tasks, active.id, taskDisplay);
  visibility(e.target);
  this.reset();
});

//load default project tasks
unsorted.addEventListener("click", function (event) {
  selector();
  addTasks(event.target, "yes");
  displayUpdate(tasks, "unsorted", taskDisplay);
});
allTasks.addEventListener("click", function () {
  selector();
  addTasks(unsorted, "no");
  displayUpdateAll(tasks, taskDisplay);
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  visibility(taskForm);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  visibility(projectFormModal);
  blurTasks(taskDisplay);
});

export default tasks;
