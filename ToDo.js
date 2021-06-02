class ToDo {
  constructor(text) {
    this.text = text;
    this.complete = false;
  }

  set ItemComplete(complete) {
    this.complete = complete;
  }
}

let toDos = [];

const toDoInput = document.getElementById("toDo");
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", addItem);
const toDosList = document.getElementById("toDos");
toDosList.addEventListener("click", (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains("toDoItem")) {
    toggleCompleted(e);
  }
});
const clearCompletedButton = document.getElementById("clear-completed-btn");


function addItem(ev) {
  ev.preventDefault();

  const inputValue = toDoInput.value;
  if (inputValue === "") return;
  const item = new ToDo(inputValue);
  toDos.push(item);
  toDoInput.value = "";
  renderAddedTodo(toDos.length - 1);
}

function renderAddedTodo(index) {
  const todoItem = toDos[index];
  const span = document.createElement("span");
  const todoLi = document.createElement("li");
  const deleteButton = document.createElement("button");
  todoLi.innerText = todoItem.text;
  todoLi.id = index;
  todoLi.classList.add("toDoItem");
  deleteButton.innerText = "delete";
  deleteButton.id = index;
  span.appendChild(todoLi);
  span.appendChild(deleteButton);
  toDosList.appendChild(span);
  deleteButton.addEventListener("click", deleteTodo);
}

function deleteTodo(ev) {
  const id = ev.target.id;
  ev.target.removeEventListener;
  toDos.splice(id, 1);
  renderList();
}

function toggleCompleted(e) {
  const todo = toDos[e.target.id];
  const li = document.getElementById(e.target.id);
  li.classList.toggle("strike");
  todo.complete = !todo.complete;
  // if (todo.complete === false) {
  //   li.classList.add("strike");
  //   todo.complete = true;
  // } else {
  //   li.classList.remove("strike");
  //   todo.complete = false;
  // }
}

function renderList() {
  toDosList.innerHTML = "";
  toDos.forEach((todo, index) => renderAddedTodo(index));
}

function clearCompleted() {
  toDos = toDos.filter(todo => {
    return !todo.complete;
  });
  renderList();
}