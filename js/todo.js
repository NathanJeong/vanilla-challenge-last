const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handletoDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const div = document.createElement("div");
  div.id = newTodo.id;
  const box = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  div.appendChild(box);
  box.appendChild(span);
  box.appendChild(button);
  toDoList.appendChild(div);
}

toDoForm.addEventListener("submit", handletoDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
