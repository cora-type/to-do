import { toDo } from "./toDo";
import { tasks } from "./index";
import { displayUpdate, displayUpdateAll } from "./displayUpdate";
import { visibility, animate } from "./styleHelper";

let newTask = (e) => {
  e.preventDefault();
  let taskDisplay = document.querySelector(".task-display");
  let active = document.querySelector(".active");

  let task = new toDo(e.target); //create a new task from form
  task.project = active.id;
  tasks[active.id].push(task); // get current project key from div id, add task to list

  if (active.classList.contains("all")) {
    displayUpdateAll(tasks, taskDisplay);
  } else {
    displayUpdate(tasks, active.id, taskDisplay);
  }
  visibility(e.target, true); //target the taskForm, since its a form reset = true
  animate(e.target);
  e.target.removeEventListener("submit", newTask);
};

export { newTask };
