let createProject = (container, name) => {
  let div = document.createElement("button");
  div.classList.add("link", "link--ersa");
  div.id = name;
  div.innerText = name;

  div.addEventListener("click", function () {
    let r = document.querySelectorAll(".link");
    r.forEach((result) => {
      result.style.cssText = "";
    });
    this.style.cssText = "box-shadow: 0 0 0 1px lightgray;";
    console.log(this.id);
  });
  container.appendChild(div);
};

export { createProject };
