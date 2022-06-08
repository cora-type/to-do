//Makes input visible/invisible
let visibility = (modal, form) => {
  modal.style.display == "none"
    ? (modal.style.display = "block")
    : setTimeout(() => {
        // give time for exit animation to complete
        modal.style.display = "none";
      }, "900");

  form == true ? modal.reset() : null;
};
//Blur's task container
let blurTasks = (taskList) => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
//Removes currently active project styling
let selector = () => {
  let r = document.querySelectorAll(".link");
  r.forEach((result) => {
    result.style.cssText = "";
  });
};

let animate = (modal) => {
  if (modal.hasAttribute("closed")) {
    modal.removeAttribute("closed");
    modal.setAttribute("open", "");
  } else {
    modal.removeAttribute("open");
    modal.setAttribute("closed", "");
  }
};
export { visibility, blurTasks, selector, animate };
