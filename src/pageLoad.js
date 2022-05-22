let initialize = (container) => {
  headers(container);
};

let headers = (container) => {
  // create heading parent
  let heading = document.createElement("div");
  heading.classList.add("heading");
  // creating heading children
  let headingStatus = document.createElement("div");
  headingStatus.classList.add("heading", "heading-status");
  let headingTitle = document.createElement("div");
  headingTitle.classList.add("heading", "heading-title");
  // append children to parent, and append parent to container
  heading.append(headingStatus, headingTitle);
  container.append(heading);
};

let sidebars = (container) => {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let sidebarAll = document.createElement("div");
  sidebarAll.classList.add("sidebar", "sidebar-all");
  let sidebarProjects = document.createElement("div");
  sidebarProjects.classList.add("sidebar", "sidebar-projects");
  let sidebarUnsorted = document.createElement("div");
  sidebarUnsorted.classList.add("sidebar", "sidebar-unsorted");

  sidebar.append(sidebarAll, sidebarProjects, sidebarUnsorted);
  container.appendChild(sidebar);
};

let tasks = (container) => {
  let;
};
