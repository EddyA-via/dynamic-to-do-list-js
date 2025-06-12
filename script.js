// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if task is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new li element and set its text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove the li
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to li, then li to ul
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
