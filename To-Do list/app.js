document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.querySelector('.task-list');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  
  let tasks = [];
  
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'task-item';
      
      const taskContent = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
        <span>${task.text}</span>
        <button class="delete-task" data-index="${index}">Delete</button>
      `;
      
      taskElement.innerHTML = taskContent;
      taskList.appendChild(taskElement);
    });

    updateProgress();
  }

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      taskInput.value = '';
      renderTasks();
    }
  });

  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-task')) {
      const index = e.target.getAttribute('data-index');
      tasks.splice(index, 1);
      renderTasks();
    }
  });

  taskList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      const index = e.target.getAttribute('data-index');
      tasks[index].completed = e.target.checked;
      renderTasks();
    }
  });

  function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100;

    progressBar.value = progress;
    progressText.innerText = `Progress: ${Math.round(progress)}%`;
  }

});

