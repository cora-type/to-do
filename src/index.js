// document.addEventListener("DOMContentLoaded", function () {}
import "./styles.css";
import { initialize } from "./pageLoad";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility, blurTasks, selector } from "./styleHelper";
import { addTasks } from "./addTasks";
import { newTask } from "./newTask";
import { newProject } from "./newProject";

initialize(document.body);

const createProjectBtn = document.querySelector(".create-project-btn");
const projectFormModal = document.querySelector(".p-form-modal");
const projectForm = document.getElementById("p-form");
const createTaskBtn = document.querySelector(".create-task-btn");
const taskForm = document.getElementById("t-form");
const taskDisplay = document.querySelector(".task-display");

const unsorted = document.querySelector(".unsorted");
const allTasks = document.querySelector(".all");

let tasks = { unsorted: [] };

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
  taskForm.addEventListener("submit", newTask);
  visibility(taskForm, true);
});
//make project form visible
createProjectBtn.addEventListener("click", function () {
  projectForm.addEventListener("submit", newProject);
  visibility(projectFormModal, false);
  blurTasks(taskDisplay);
  console.log(tasks);
});

export { tasks };
