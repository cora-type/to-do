//Changes active project to clicked project, removes all previous tasks from the container to display newly active project tasks.

let addTasks = (x) => {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  x.classList.add("active");
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
};

export { addTasks };
