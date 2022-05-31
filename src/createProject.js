import { displayUpdate } from "./displayUpdate";
import { selector } from "./styleHelper";

let createProject = (sidebarContainer, name, list, taskContainer, currentProject) => {
  //create the project element
  let div = document.createElement("button");
  div.classList.add("link", "link--ersa");
  div.id = name;
  div.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  div.addEventListener("click", function () {
    selector();
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";

    displayUpdate(list, name, taskContainer);
    currentProject = name;
    console.log(currentProject);
  });
  sidebarContainer.appendChild(div);
};

export { createProject };
