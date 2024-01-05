document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const deleteSelectedButton = document.getElementById("delete-selected");
    const deleteAllButton = document.getElementById("delete-all");
    const allTodosList = document.getElementById("all-todos");

    addButton.addEventListener("click", addTodo);
    deleteSelectedButton.addEventListener("click", deleteSelectedTodos);
    deleteAllButton.addEventListener("click", deleteAllTodos);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            todoItem.textContent = todoText;

            todoItem.appendChild(checkbox);
            allTodosList.appendChild(todoItem);
            todoInput.value = "";
        }
    }

    function deleteSelectedTodos() {
        const selectedCheckboxes = document.querySelectorAll(".todos-list li input.checkbox:checked");
        selectedCheckboxes.forEach(checkbox => {
            const todoItem = checkbox.parentElement;
            todoItem.remove();
        });
    }

    function deleteAllTodos() {
        allTodosList.innerHTML = "";
    }
});
