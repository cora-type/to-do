import { displayUpdate } from "./displayUpdate";
import { selector } from "./styleHelper";
import { addTasks } from "./addTasks";

let createProject = (sidebarContainer, name, list, taskContainer) => {
  //create the project element
  let button = document.createElement("button");
  button.classList.add("link", "link--ersa");
  button.id = name;
  button.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  button.addEventListener("click", function (event) {
    selector();
    addTasks(event.target);
    displayUpdate(list, name, taskContainer);
  });
  sidebarContainer.appendChild(button);
};

export { createProject };
