import { createTask } from "./createTask";

//Updates task container to show respective project/tasks from list of tasks.
let displayUpdate = (list, project, container) => {
  list[project].forEach((task, id) => {
    var myEle = document.getElementById(id); //if the task already exists, ignore (prevents duplication)
    if (!myEle) {
      createTask(container, task, id, project);
    }
  });
};

let displayUpdateAll = (list, container) => {
  let all = [];
  Object.keys(list).forEach((key) => {
    all = all.concat(list[key]);
  });
  all.forEach((task, id) => {
    createTask(container, task, id);
  });
};

export { displayUpdate, displayUpdateAll };
