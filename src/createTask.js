import edit from "./edit.svg";
import { tasks } from "./index";

let createTask = (container, object, id) => {
  let index = id; //stores the index at which this specific "toDo" exists in the project
  let task = document.createElement("div");
  task.classList.add("task");
  container.appendChild(task);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container");

  task.appendChild(labelContainer);

  let checkbox = document.createElement("input");
  checkbox.id = object.project + id;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", object.project + id);

  //remove on check
  checkbox.addEventListener("change", function () {
    setTimeout(() => {
      if (this.checked) {
        task.remove();
        tasks[object.project].splice(index, 1);
      }
    }, 700);
  });
  labelContainer.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", object.project + id);

  let labelText = document.createElement("div");
  labelText.classList.add("label-text");
  labelText.innerText = object.title;
  label.appendChild(labelText);

  labelContainer.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let descriptor = document.createElement("div");
  descriptor.classList.add("descriptor");
  descriptor.innerText = object.description;
  taskInfo.appendChild(descriptor);

  let editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  taskInfo.appendChild(editButton);

  let editSVG = new Image();
  editSVG.src = edit;
  editSVG.classList.add("edit-svg");
  editButton.appendChild(editSVG);

  // let editor = () => {
  //   let taskForm = document.getElementById("t-form");
  //   visibility(taskForm, true);
  //   taskForm.title.value = object.title;
  //   taskForm.description.value = object.description;
  //   taskForm.notes.value = object.notes;
  //   taskForm.priority.value = object.priority;
  //   taskForm.date.value = object.date;
  //   taskForm.addEventListener("submit", something);
  // };

  // let something = (e) => {
  //   let taskForm = document.getElementById("t-form");
  //   e.preventDefault();
  //   object.changeTitle = taskForm.title.value;
  //   object.changeDescription = taskForm.description.value;
  //   object.changeNotes = taskForm.notes.value;
  //   object.changePriority = taskForm.priority.value;
  //   object.changeDate = taskForm.date.value;
  //   e.target.removeEventListener("submit", something);
  //   console.log("editor");
  // };

  // editButton.addEventListener("click", editor);

  let taskTime = document.createElement("div");
  taskTime.classList.add("task-time");
  taskTime.innerText = "2 days";
  taskInfo.appendChild(taskTime);
};

export { createTask };
