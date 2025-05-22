const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (!title || !desc) {
    alert('Please fill in both fields');
    return;
  }

  const newTask = {
    id: Date.now().toString(),
    title,
    desc,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  form.reset();
});


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}" class="complete-btn">
      <div class="task-content">
        <h3>${task.title}</h3>
        <p>${task.desc}</p>
      </div>
      <div class="task-actions">
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

taskList.addEventListener('click', function (e) {
  const id = e.target.dataset.id;


  if (e.target.classList.contains('complete-btn')) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }


  if (e.target.classList.contains('delete-btn')) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }

 if (e.target.classList.contains('edit-btn')) {
  const task = tasks.find(t => t.id === id);
  if (!task) {
    console.error('Task not found');
    return;
  }; 

  const newTitle = prompt('Edit Title:', task.title);
  const newDesc = prompt('Edit Description:', task.desc);

  if (newTitle !== null && newDesc !== null) {
    task.title = newTitle.trim();
    task.desc = newDesc.trim();
    saveTasks();
    renderTasks();
  }
}

});
