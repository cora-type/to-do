class toDo {
  constructor(title, description, dueDate, priority, notes, status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
  }

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

let example = new toDo(
  "Take out the trash",
  "Need to take out the trash so I get paid",
  "12/01/2022",
  "all nighter",
  "do it quick, do it at night, just do it",
  "uncomplete"
);

example.changeTitle = "Don't walk the dog";
example.changeDueDate = "12/1/1";

console.log(example);
