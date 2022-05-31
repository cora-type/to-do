import { createTask } from "./createTask";

let displayUpdate = (list, project, container) => {
  list[project].forEach((result, id) => {
    var myEle = document.getElementById(id);
    if (!myEle) {
      createTask(container, result, id);
    }
  });
};

export { displayUpdate };
