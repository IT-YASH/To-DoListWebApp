document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
            todoInput.focus();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="todo-item-text">${taskText}</span>
            <div class="todo-actions">
                <button class="btn complete-btn"><i class="fas fa-check"></i></button>
                <button class="btn delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        todoList.appendChild(li);

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });
    }
});
