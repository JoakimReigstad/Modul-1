let tasks = [];

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let taskItem = document.createElement("li");
        taskItem.classList.add("list-item");
        taskItem.innerHTML = `
            <div class="task-name">${task.name}</div>
            <div class="task-person">${task.person}</div>
            <div class="task-deadline">${task.deadline}</div>
            <div class="task-done">
                <input type="checkbox" onchange="toggleDone(${index})" ${task.done ? "checked" : ""}>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let taskName = document.getElementById("taskName").value;
    let person = document.getElementById("person").value;
    let deadline = document.getElementById("deadline").value;

    let task = {
        name: taskName,
        person: person,
        deadline: deadline,
        done: false,
        doneDate: null
    };

    tasks.push(task);
    displayTasks();

    document.getElementById("taskName").value = "";
    document.getElementById("person").value = "";
    document.getElementById("deadline").value = "";
});

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    if (tasks[index].done) {
        tasks[index].doneDate = new Date().toISOString().substr(0, 10);
    } else {
        tasks[index].doneDate = null;
    }
    displayTasks();
}

displayTasks();


