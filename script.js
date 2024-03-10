function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskInput.value}
    <button onclick="removeTask(this)">Remove</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';
}

function removeTask(button) {
  const li = button.parentNode;
  const taskList = li.parentNode;
  taskList.removeChild(li);
}