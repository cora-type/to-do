// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { toDo } from "./toDo";
import { createProject } from "./createProject";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility, blurTasks, selector } from "./styleHelper";
import { addTasks } from "./addTasks";
initialize(document.body);

const createProjectBtn = document.querySelector(".create-project-btn");
const projectFormModal = document.querySelector(".p-form-modal");
const projectForm = document.getElementById("p-form");
const createTaskBtn = document.querySelector(".create-task-btn");
let taskForm = document.getElementById("t-form");
const taskDisplay = document.querySelector(".task-display");

const sidebarContainer = document.querySelector(".sidebar");
const unsorted = document.querySelector(".unsorted");
const allTasks = document.querySelector(".all");

let tasks = { unsorted: [] };

//form handlers
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = this.projectname.value;
  blurTasks(taskDisplay);
  if (name) {
    tasks[name] = []; //create a project key
    createProject(sidebarContainer, name, tasks, taskDisplay);
  }
  this.reset();
  visibility(projectFormModal, false);
});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const active = document.querySelector(".active"); //get currently active project
  let task = new toDo(taskForm); //create a new task from form
  task.project = active.id;
  tasks[active.id].push(task); // get current project key from id, add task to list
  if (active.classList.contains("all")) {
    displayUpdateAll(tasks, taskDisplay);
  } else {
    displayUpdate(tasks, active.id, taskDisplay);
  }
  visibility(e.target, true);
});

//load default project tasks
unsorted.addEventListener("click", function (event) {
  selector(); //remove currently active link border
  addTasks(event.target);
  displayUpdate(tasks, event.target.id, taskDisplay);
});
allTasks.addEventListener("click", function (event) {
  selector();
  addTasks(event.target);
  displayUpdateAll(tasks, taskDisplay);
});

//make task form visible
createTaskBtn.addEventListener("click", function () {
  visibility(taskForm, true);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  visibility(projectFormModal, false);
  blurTasks(taskDisplay);
});

//used to bring up task-form as an task editor
let editor = (object) => {
  visibility(taskForm);
  taskForm.title.value = object.title;
  taskForm.description.value = object.description;
  taskForm.notes.value = object.notes;
  taskForm.priority.value = object.priority;
  taskForm.date.value = object.date;
};

export { editor, tasks };
