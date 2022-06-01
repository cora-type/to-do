//Changes active project to clicked project, removes all previous tasks from the container to display newly active project tasks.

let addTasks = (x) => {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  x.classList.add("active");
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });
  x.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
};

export { addTasks };
