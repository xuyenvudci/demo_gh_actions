function addTodoToList(list, task) {
  const li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", function () {
    this.remove();
    todos.splice(todos.indexOf(task), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  list.appendChild(li);
}

function init() {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((task) => addTodoToList(list, task));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value;
    input.value = "";

    addTodoToList(list, task);

    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
  });
}

document.addEventListener("DOMContentLoaded", init);

// For testing
if (typeof module !== "undefined") {
  module.exports = addTodoToList;
}
