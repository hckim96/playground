const todoForm = document.querySelector('.todo-form'),
    todoFormInput = document.querySelector('.todo-form-input'),
    todoList = document.querySelector('.todo-list');

const TODO_LS = 'todo';
let todos = [];
function handleDeleteButtonClick(e) {
    e.preventDefault();
    const button = e.target;
    const li = button.parentNode;
    console.log(li);
}
function paintTodo(text) {
    const li = document.createElement('li');
    li.id = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;

    const span = document.createElement('span');
    span.innerText = text;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
function loadTodos() {
    todos = JSON.parse(localStorage.getItem(TODO_LS));
    todos.forEach(function (todo) {
        addTodo(todo.text);
    });
}

function saveTodos() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function addTodo(text) {
    paintTodo(text);

    const todo = {
        text: text,
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
    };
    todos.push(todo);
    console.log(todos);
    saveTodos();
}
function handleSubmit(e) {
    e.preventDefault();
    const currentValue = todoFormInput.value;
    addTodo(currentValue);
    todoFormInput.value = '';
}

todoForm.addEventListener('submit', handleSubmit);
loadTodos();
