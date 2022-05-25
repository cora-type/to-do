import "./styles.css";

import { initialize } from "./pageLoad";
import { create } from "./create";

// let todoList = {
//   unsorted: "",
// };
initialize(document.body);

let addBtn = document.querySelector(".add");

addBtn.addEventListener("click", function () {
  let form = document.querySelector(".form-container");
  form.style.visibility == "hidden"
    ? (form.style.visibility = "visible")
    : (form.style.visibility = "hidden");
});

// document.addEventListener("DOMContentLoaded", function () {}
