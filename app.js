//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);

//FONCTIONS
function addTodo(event) {
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Creer le Li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Bouton Supprimer
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Ajouter notre todo à la todolist
  todoList.appendChild(todoDiv);
}
