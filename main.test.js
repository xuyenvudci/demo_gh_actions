const addTodoToList = require("./main.js");

describe("Todo List", () => {
  let list, todos;

  beforeEach(() => {
    document.body.innerHTML = `<ul id="todo-list"></ul>`;
    list = document.getElementById("todo-list");
  });

  test("should add a todo item to the list", () => {
    const task = "Test Task";
    addTodoToList(list, task);

    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe(task);
  });
});
