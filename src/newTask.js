import { toDo } from "./toDo";
import { tasks } from "./index";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility } from "./styleHelper";

let newTask = (event) => {
  event.preventDefault();
  let taskDisplay = document.querySelector(".task-display");
  let active = document.querySelector(".active");
  let task = new toDo(e.target); //create a new task from form
  task.project = active.id;
  tasks[active.id].push(task); // get current project key from id, add task to list
  if (active.classList.contains("all")) {
    displayUpdateAll(tasks, taskDisplay);
  } else {
    displayUpdate(tasks, active.id, taskDisplay);
  }
  visibility(event.target, true); //target the taskForm, since its a form reset
};

export { newTask };
