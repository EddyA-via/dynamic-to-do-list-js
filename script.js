// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input value

        // Check if taskText is not empty
        if (taskText !== '') {
            // Create a new li element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to remove the task
            removeButton.onclick = function () {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the li
            listItem.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Attach event listener to addButton
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
