import edit from "./edit.svg";

let initialize = (container) => {
  headers(container);
  sidebars(container);
  tasks(container);
  taskMaker(container);
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
//Create form to add to-do items
let taskMaker = (container) => {
  let formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  let form = document.createElement("form");
  form.classList.add("form");

  let form__group = document.createElement("div");
  form__group.classList.add("form__group");

  let titleInput = document.createElement("input");
  titleInput.classList.add("form__input", "title");
  Object.assign(titleInput, {
    type: "text",
    placeholder: "title",
  });

  let descriptionInput = document.createElement("input");

  descriptionInput.classList.add("form__input", "description");
  Object.assign(descriptionInput, {
    type: "text",
    placeholder: "description",
  });

  let notesInput = document.createElement("textarea");
  Object.assign(notesInput, {
    name: "notes",
    cols: "40",
    rows: "3",
    placeholder: "notes",
  });

  let selectInput = document.createElement("select");
  selectInput.classList.add("priority");
  selectInput.setAttribute("name", "priority");
  selectInput.options[selectInput.options.length] = new Option(
    "life or death",
    "life or death"
  );

  selectInput.options[selectInput.options.length] = new Option(
    "it can wait",
    "it can wait"
  );
  selectInput.options[selectInput.options.length] = new Option(
    "all nighter",
    "all nighter"
  );

  let dateInput = document.createElement("input");
  Object.assign(dateInput, {
    type: "date",
    name: "date",
    id: "date",
    value: "2022-01-01",
    min: "2022-01-01",
  });

  form__group.append(titleInput, descriptionInput, notesInput, selectInput, dateInput);
  form.appendChild(form__group);
  formContainer.appendChild(form);
  container.appendChild(formContainer);
};

export { initialize };
