class toDo {
  #titleValue;
  #description;
  #dueDate;
  #priority;
  #notes;

  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  get title() {
    return this.#titleValue;
  }

  set title(title) {
    if (title === "") {
      throw new Error(`name field of title cannot be empty`);
    }
    this.#titleValue = title;
  }
}

let example = new toDo(
  "Take out the trash",
  "Need to take out the trash so I get paid",
  "12/01/2022",
  "all nighter",
  "do it quick, do it at night, just do it"
);

console.log(example.#titleValue);
