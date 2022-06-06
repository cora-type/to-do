// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { toDo } from "./toDo";
import { createProject } from "./createProject";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility, blurTasks, selector } from "./styleHelper";
import { addTasks } from "./addTasks";
import { newTask } from "./newTask";

initialize(document.body);

const createProjectBtn = document.querySelector(".create-project-btn");
const projectFormModal = document.querySelector(".p-form-modal");
const projectForm = document.getElementById("p-form");
const createTaskBtn = document.querySelector(".create-task-btn");
const taskForm = document.getElementById("t-form");
const taskDisplay = document.querySelector(".task-display");

const sidebarContainer = document.querySelector(".sidebar");
const unsorted = document.querySelector(".unsorted");
const allTasks = document.querySelector(".all");

let tasks = { unsorted: [] };

//form handlers
projectForm.addEventListener("submit", newTask);

//load default project tasks
unsorted.addEventListener("click", function (event) {
  selector(); //remove currently active link border
  addTasks(event.target); //removes tasks and styles clicked project
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
  console.log(tasks);
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
