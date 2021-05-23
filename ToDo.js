class ToDo {
  constructor(text) {
    this.text = text;
    this.complete = false;
  }
  

  set ItemComplete(complete){
    this.complete = complete;
  }
}

const toDos = [];

const toDoInput = document.getElementById("toDo");
const addForm = document.getElementById("addForm");
addForm.addEventListener("submit", addItem);

function addItem(ev){
  ev.preventDefault();

  const inputValue = toDoInput.value;
  if (inputValue === "") return;
  const item = new ToDo(inputValue);
  toDos.push(item);
  toDoInput.value = "";
  console.log(toDos);
}
