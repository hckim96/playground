const todoForm = document.querySelector('.todo-form'),
    todoFormInput = document.querySelector('.todo-form-input'),
    todoList = document.querySelector('.todo-list');

const TODO_LS = 'todo';
let todos = [];
function handleDeleteButtonClick(e) {
    e.preventDefault();
    const button = e.target;
    const li = button.parentNode;

    todos = todos.filter(function (todo) {
        return todo.id != li.id;
    });
    todoList.removeChild(li);
    saveTodos();
}
function paintTodo(todo) {
    const li = document.createElement('li');
    li.id = todo.id;
    const span = document.createElement('span');
    span.innerText = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
function loadTodos() {
    parsedTodos = JSON.parse(localStorage.getItem(TODO_LS));
    if (parsedTodos !== null) {
        todos = parsedTodos;
        todos.forEach(function (todo) {
            paintTodo(todo);
        });
    }
}

function saveTodos() {
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function addTodo(text) {
    const todo = {
        text: text,
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
    };
    paintTodo(todo);
    todos.push(todo);
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
