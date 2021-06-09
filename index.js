let toDoListItems= [];

const toDoInput = document.getElementById("toDo");
const addForm = document.getElementById("addForm");
const toDoUL = document.getElementById("toDos");
const clearCompletedButton = document.getElementById("clear-completed-btn");


addForm.addEventListener("submit", addItem);
toDoUL.addEventListener("click", (e) => {
  console.log(e.target.classList)
  if (e.target.classList.contains("toDoItem")) {
    toggleCompleted(e);
  }
});

function addItem(ev) {
  ev.preventDefault();
  const inputValue = toDoInput.value;
  if (inputValue === "") return;
  const item = new ToDo(inputValue);
  toDoListItems.push(item);
  toDoInput.value = "";
  renderAddedTodo(toDoListItems.length - 1);
}

function renderAddedTodo(index) {
  const toDoItem = toDoListItems[index];
  const span = document.createElement("span");
  const toDoLi = document.createElement("li");
  const deleteButton = document.createElement("button");
  toDoLi.innerText = toDoItem.text;
  toDoLi.id = index;
  toDoLi.classList.add("toDoItem");
  deleteButton.innerText = "delete";
  deleteButton.id = index;
  span.appendChild(toDoLi);
  span.appendChild(deleteButton);
  toDoUL.appendChild(span);
  deleteButton.addEventListener("click", deleteTodo);
}

function deleteTodo(ev) {
  const id = ev.target.id;
  ev.target.removeEventListener;
  toDoListItems.splice(id, 1);
  renderList();
}

function toggleCompleted(e) {
  const toDo = toDoListItems[e.target.id];
  const li = document.getElementById(e.target.id);
  li.classList.toggle("strike");
  toDo.complete = !toDo.complete;
  // if (toDo.complete === false) {
  //   li.classList.add("strike");
  //   toDo.complete = true;
  // } else {
  //   li.classList.remove("strike");
  //   toDo.complete = false;
  // }
}

function renderList() {
  toDoUL.innerHTML = "";
  toDoListItems.forEach((toDo, index) => renderAddedTodo(index));
}

function clearCompleted() {
  toDoListItems = toDoListItems.filter(toDo => {
    return !toDo.complete;
  });
  renderList();
}