const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = 
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">X</button>
  ;
  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks();
}

function removeTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();