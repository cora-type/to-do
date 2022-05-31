import { createTask } from "./createTask";

let displayUpdate = (list, project, container) => {
  let j = document.querySelectorAll(".task");
  j.forEach((task) => {
    task.remove();
  });

  list[project].forEach((result, id) => {
    var myEle = document.getElementById(id);
    if (!myEle) {
      createTask(container, result, id);
    }
  });
};

export { displayUpdate };
