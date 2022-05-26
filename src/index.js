import "./styles.css";

import { initialize } from "./pageLoad";
import { toDo } from "./toDo";

initialize(document.body);

let list = [{ unsorted: "" }];

let addBtn = document.querySelector(".add");
let form = document.getElementById("form");

addBtn.addEventListener("click", function () {
  form.style.visibility == "hidden"
    ? (form.style.visibility = "visible")
    : (form.style.visibility = "hidden");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  list["unsorted"] += new toDo(this);
  console.log();
});
// document.addEventListener("DOMContentLoaded", function () {}
