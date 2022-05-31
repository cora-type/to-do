//helper functions
let visibility = (modal) => {
  modal.style.visibility == "hidden"
    ? (modal.style.visibility = "visible")
    : (modal.style.visibility = "hidden");
};
let blurTasks = (taskList) => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
//changes current project selection
let selector = () => {
  let r = document.querySelectorAll(".link");
  r.forEach((result) => {
    result.style.cssText = "";
  });
};

export { visibility, blurTasks, selector };
