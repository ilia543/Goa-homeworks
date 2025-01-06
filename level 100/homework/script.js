const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');


window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    taskList.innerHTML = '';
});

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('li').forEach((li) => {
        tasks.push(li.textContent.replace('Remove', '').trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    
    li.textContent = task;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
    
    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();
}

function loadTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        addTask(task);
    });
}
