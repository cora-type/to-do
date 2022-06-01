let addTask = (project) => {
  let active = document.querySelector(".active");
  active.classList.remove("active");
  unsorted.classList.add("active");
  let j = document.querySelectorAll(".task");
  j.forEach((task) => {
    task.remove();
  });
  project.style.cssText = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
};

export { addTask };
