function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return; // Don't add empty tasks
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-button" onclick="completeTask(this)">Complete</button>
                <button class="delete-button" onclick="deleteTask(this)"><i class="fa-solid fa-trash" style="color: #eaeaeb;"></i></button>
            `;
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

function deleteTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentElement;
  taskList.removeChild(li);
}

function completeTask(button) {
  const taskText = button.previousElementSibling.innerText;
  button.parentElement.style.textDecoration = "line-through";
  button.parentElement.style.backgroundColor = "#ccc";
  button.style.display = "none";
}
