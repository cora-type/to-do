import { createTask } from "./createTask";

//Updates task container to show respective project/tasks from list of tasks.
let displayUpdate = (list, project, container) => {
  list[project].forEach((result, id) => {
    var myEle = document.getElementById(id); //if the task already exists, ignore
    if (!myEle) {
      createTask(container, result, id);
    }
  });
};

let displayUpdateAll;

export { displayUpdate };
