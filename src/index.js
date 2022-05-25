import "./styles.css";

import { initialize } from "./pageLoad";
import { toDo } from "./toDo";

// let todoList = {
//   unsorted: "",
// };
initialize(document.body);

let addBtn = document.querySelector(".add");
let form = document.getElementById("form");

addBtn.addEventListener("click", function () {
  form.style.visibility == "hidden"
    ? (form.style.visibility = "visible")
    : (form.style.visibility = "hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let r = new toDo(this);
  console.log(r);
});
// document.addEventListener("DOMContentLoaded", function () {}
