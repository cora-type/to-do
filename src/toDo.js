class toDo {
  constructor(form) {
    this.title = form.title.value;
    this.description = form.description.value;
    this.dueDate = form.date.value;
    this.priority = form.priority.value;
    this.notes = form.notes.value;
    this.status = false;
  }

  todoList = {};

  set changeTitle(value) {
    this.title = value;
  }
  set changeDescription(value) {
    this.description = value;
  }
  set changeDueDate(value) {
    this.dueDate = value;
  }
  set changePriority(value) {
    this.priority = value;
  }
  set changeNotes(value) {
    this.notes = value;
  }
}
//
// let example = new toDo(
//   "Take out the trash",
//   "Need to take out the trash so I get paid",
//   "12/01/2022",
//   "all nighter",
//   "do it quick, do it at night, just do it",
//   "uncomplete"
// );
//
// example.changeTitle = "Don't walk the dog";
// example.changeDueDate = "12/1/1";
//
// console.log(example);

export { toDo };
