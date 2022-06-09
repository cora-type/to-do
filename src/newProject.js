import { tasks } from "./index";
import { visibility, blurTasks, animate } from "./styleHelper";
import { createProject } from "./createProject";

let newProject = (e) => {
  e.preventDefault();
  const sidebarContainer = document.querySelector(".sidebar");
  const taskDisplay = document.querySelector(".task-display");
  const projectFormModal = document.querySelector(".p-form-modal");

  let name = e.target.projectname.value;
  blurTasks(taskDisplay);
  if (name) {
    tasks[name] = []; //create a project key
    createProject(sidebarContainer, name, tasks, taskDisplay);
  }
  e.target.reset();
  visibility(projectFormModal, false);
  animate(projectFormModal);
  e.target.removeEventListener("submit", newProject);
};

export { newProject };
