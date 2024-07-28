document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
                todoList.appendChild(li);
            } else {
                li.classList.remove('completed');
            }
        });

        const text = document.createTextNode(todoText);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        input.value = '';
        input.focus();
    }
});
