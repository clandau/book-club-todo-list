class ToDo {
  constructor(text) {
    this.text = text;
    this.complete = false;
  }

  set ItemComplete(complete) {
    this.complete = complete;
  }
}

const toDos = [];

const toDoInput = document.getElementById("toDo");
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", addItem);
const toDosList = document.getElementById("toDos");

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

function renderList() {
  toDosList.innerHTML = "";
  toDos.forEach((todo, index) => renderAddedTodo(index));
}
