import edit from "./edit.svg";

let createTask = (container) => {
  let task = document.createElement("div");
  task.classList.add("task");

  container.appendChild(task);

  let checkbox = document.createElement("input");
  checkbox.id = 0;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", 0);

  task.appendChild(checkbox);

  let label = document.createElement("label");
  label.setAttribute("for", 0);
  label.innerText = "walk the dog";
  task.appendChild(label);

  let taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  task.appendChild(taskInfo);

  let editSVG = new Image();
  editSVG.src = edit;
  editSVG.setAttribute("style", "width: 15%;");
  editSVG.classList.add("task-edi");
  taskInfo.appendChild(editSVG);

  let taskTime = document.createElement("div");
  taskTime.classList.add("task-time");
  taskTime.innerText = "2 days";
  taskInfo.appendChild(taskTime);

  container.appendChild(task);
};

export { createTask };

// let createTask = (container, object) => {
//   let task = document.createElement("div");
//   task.classList.add("task");
//
//   container.appendChild(task);
//
//   let checkbox = document.createElement("input");
//   checkbox.id = object.id;
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.setAttribute("value", object.id);
//
//   task.appendChild(checkbox);
//
//   let label = document.createElement("label");
//   label.setAttribute("for", object.id);
//   label.innerText = object.title;
//   task.appendChild(label);
//
//   let taskInfo = document.createElement("div");
//   taskInfo.classList.add("task-info");
//   task.appendChild(taskInfo);
//
//   let editSVG = new Image();
//   editSVG.src = edit;
//   editSVG.setAttribute("style", "width: 15%;");
//   editSVG.classList.add("task-edi");
//   taskInfo.appendChild(editSVG);
//
//   let taskTime = document.createElement("div");
//   taskTime.classList.add("task-time");
//   taskTime.innerText = "2days";
//   taskInfo.appendChild(taskTime);
// };
