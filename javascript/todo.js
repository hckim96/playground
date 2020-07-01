const todoForm = document.querySelector('.todo-form'),
    todoFormInput = document.querySelector('.todo-form-input'),
    todoList = document.querySelector('.todo-list');

const TODO_LS = 'todo';

function addTodo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
function handleSubmit(e) {
    e.preventDefault();
    const currentValue = todoFormInput.value;
    addTodo(currentValue);
    todoFormInput.value = '';
}

todoForm.addEventListener('submit', handleSubmit);
