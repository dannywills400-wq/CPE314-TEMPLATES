window.onload = loadTasks;

function addTask() {

    let taskInput = document.getElementById("task");
    let task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    createTask(task);

    saveTask(task);

    taskInput.value = "";
}

function createTask(taskText) {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
        removeTask(taskText);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById("list").appendChild(li);
}

function saveTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        createTask(task);
    });
}

function removeTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(function (t) {
        return t !== task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
