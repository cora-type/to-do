import edit from "./edit.svg";

let initialize = (container) => {
  headers(container);
  sidebars(container);
  tasks(container);
};

//Create header.
let headers = (container) => {
  let heading = document.createElement("div");
  let headingStatus = document.createElement("div");
  let headingTitle = document.createElement("div");

  heading.classList.add("heading");
  headingStatus.classList.add("heading", "heading-status");
  headingTitle.classList.add("heading", "heading-title");

  headingStatus.innerText = "nothing ";
  headingTitle.innerText = "to do";
  // append children to parent, and append parent to container
  heading.append(headingStatus, headingTitle);
  container.append(heading);
};

//Create sidebar.
let sidebars = (container) => {
  let sidebar = document.createElement("div");
  let sidebarAll = document.createElement("div");
  let sidebarProjects = document.createElement("div");
  let sidebarUnsorted = document.createElement("div");

  sidebar.classList.add("sidebar");
  sidebarAll.classList.add("sidebar", "sidebar-all");
  sidebarProjects.classList.add("sidebar", "sidebar-projects");
  sidebarUnsorted.classList.add("sidebar", "sidebar-unsorted");

  sidebarProjects.innerText = "projects";
  sidebarAll.innerText = "all tasks";
  sidebarUnsorted.innerText = "unsorted";

  sidebar.append(sidebarAll, sidebarProjects, sidebarUnsorted);
  container.appendChild(sidebar);
};

//Create task container.
let tasks = (container) => {
  let tasklist = document.createElement("div");
  let button = document.createElement("div");
  let addButton = document.createElement("button");

  tasklist.classList.add("task-list");
  button.classList.add("button");
  addButton.classList.add("add");

  addButton.innerText = "+";

  button.appendChild(addButton);
  tasklist.appendChild(button);
  container.appendChild(tasklist);
};

let taskMaker = (container) => {
  let formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  container.appendChild(formContainer);
};

export { initialize };
