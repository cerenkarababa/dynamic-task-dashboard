
import { Task, TaskManager } from "./taskManager.js";
import { fetchTasks } from "./api.js";

const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const taskManager = new TaskManager();

function renderTasks() {
    taskList.innerHTML = "";

    taskManager.tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const titleElement = document.createElement("span");
        titleElement.textContent = task.title;

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.textContent = "Toggle";
        toggleButton.classList.add("toggle-button");

        toggleButton.addEventListener("click", () => {
            taskManager.toggleTask(task.id);
            renderTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", () => {
            taskManager.removeTask(task.id);
            renderTasks();
        });

        taskElement.appendChild(titleElement);
        taskElement.appendChild(toggleButton);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    });
}

async function loadTasks() {
    statusMessage.textContent = "Loading tasks...";
    loadTasksBtn.disabled = true;
    loadTasksBtn.textContent = "Loading...";

    try {
        const rawTasks = await fetchTasks();

        const tasksJson = JSON.stringify(rawTasks);
        const parsedTasks = JSON.parse(tasksJson);

        const taskInstances = parsedTasks.map((taskData) => {
            return new Task(
                taskData.id,
                taskData.title,
                taskData.completed
            );
        });

        taskManager.setTasks(taskInstances);
        renderTasks();

        statusMessage.textContent = "";
    } catch (error) {
        statusMessage.textContent =
            "Sorry, tasks could not be loaded. Please try again.";

        console.error("Error loading tasks:", error);
    } finally {
        loadTasksBtn.disabled = false;
        loadTasksBtn.textContent = "Load Tasks";
    }
}

loadTasksBtn.addEventListener("click", loadTasks);

