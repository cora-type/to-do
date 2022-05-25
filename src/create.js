import toDo from "./toDo";

let create = () => {
  let title = document.querySelector(".title");
  let description = document.querySelector(".description");
  let dueDate = document.querySelector('[name="date"]');
  let priority = document.querySelector(".priority");
  let notes = document.querySelector('[name="notes"]');
  let status = "uncomplete";

  return new toDo(title, description, dueDate, priority, notes, status);
};
