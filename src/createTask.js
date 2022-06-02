import edit from "./edit.svg";
import tasks from "./index";

let createTask = (container, task, id, project) => {
  let task = document.createElement("div");
  task.classList.add("task");
  container.appendChild(task);

  let checkbox = document.createElement("input");
  checkbox.id = id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", id);

  //remove on check
  checkbox.addEventListener("change", function () {
    setTimeout(() => {
      if (this.checked) {
        this.parentElement.remove();
        tasks[project].splice(this.id, 1);
      }
    }, 700);
  });
  task.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = task.title;
  task.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let editSVG = new Image();
  editSVG.src = edit;
  editSVG.setAttribute("style", "width: 15%;");
  editSVG.classList.add("task-edit");
  taskInfo.appendChild(editSVG);

  let taskTime = document.createElement("div");
  taskTime.classList.add("task-time");
  taskTime.innerText = "2 days";
  taskInfo.appendChild(taskTime);
};

export { createTask };
