import { createTask } from "./createTask";

//Updates task container to show respective project/tasks from list of tasks.
let displayUpdate = (list, project, container) => {
  list[project].forEach((result, id) => {
    //if the task already exists, ignore (prevents duplication)
    var myEle = document.getElementById(result.project + id);
    if (!myEle) {
      createTask(container, result, id);
    }
  });
};

//used to update taskDisplay with ALL tasks
let displayUpdateAll = (list, container) => {
  Object.keys(list).forEach((key) => {
    list[key].forEach((result, id) => {
      var myEle = document.getElementById(result.project + id);
      if (!myEle) {
        createTask(container, result, id);
      }
    });
  });
};

export { displayUpdate, displayUpdateAll };
