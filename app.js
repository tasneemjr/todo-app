document.getElementById("add-btn").addEventListener("click", () => {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task) {
        const todoList = document.getElementById("todo-list");

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = task;

        // Add a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
});