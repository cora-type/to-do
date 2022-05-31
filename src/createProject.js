import { displayUpdate } from "./displayUpdate";
import { selector } from "./styleHelper";

let createProject = (sidebarContainer, name, list, taskContainer) => {
  //create the project element
  let button = document.createElement("button");
  button.classList.add("link", "link--ersa");
  button.id = name;
  button.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  button.addEventListener("click", function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");
    this.classList.add("active");
    let j = document.querySelectorAll(".task");
    j.forEach((task) => {
      task.remove();
    });
    selector();
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
    displayUpdate(list, name, taskContainer);
  });
  sidebarContainer.appendChild(button);
};

export { createProject };
