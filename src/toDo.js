class toDo {
  constructor(form) {
    this.title = form.title.value;
    this.description = form.description.value;
    this.date = form.date.value;
    this.priority = form.priority.value;
    this.notes = form.notes.value;
    this.status = false;
  }

  set changeTitle(value) {
    this.title = value;
  }
  set changeDescription(value) {
    this.description = value;
  }
  set changeDate(value) {
    this.date = value;
  }
  set changePriority(value) {
    this.priority = value;
  }
  set changeNotes(value) {
    this.notes = value;
  }
}
// class toDo {
//   constructor(title, description, date, priority, notes) {
//     this.title = title;
//     this.description = description;
//     this.date = date;
//     this.priority = priority;
//     this.notes = notes;
//     this.status = false;
//   }
//
//   set changeTitle(value) {
//     this.title = value;
//   }
//   set changeDescription(value) {
//     this.description = value;
//   }
//   set changeDate(value) {
//     this.date = value;
//   }
//   set changePriority(value) {
//     this.priority = value;
//   }
//   set changeNotes(value) {
//     this.notes = value;
//   }
// }

export { toDo };
