import { displayUpdate } from "./displayUpdate";
import { selector } from "./styleHelper";

let createProject = (sidebarContainer, name, list, taskContainer) => {
  //create the project element
  let div = document.createElement("button");
  div.classList.add("link", "link--ersa");
  div.id = name;
  div.innerText = name;

  //if project is clicked, highlight and update the list of tasks
  div.addEventListener("click", function () {
    let j = document.querySelector(".active");
    j.classList.remove("active");
    selector();
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
    this.classList.add("active");
    displayUpdate(list, name, taskContainer);
  });
  sidebarContainer.appendChild(div);
};

export { createProject };
