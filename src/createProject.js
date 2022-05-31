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
    selector();
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
    this.classList.add("active");
    displayUpdate(list, name, taskContainer);
  });
  sidebarContainer.appendChild(button);
};

export { createProject };
