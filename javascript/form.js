const formInput = document.querySelector('.form-input'),
    formText = document.querySelector('.form-text'),
    formDelete = document.querySelector('.form-delete');

const USER_NAME_KEY = 'userName';

function saveUserName(userName) {
    localStorage.setItem(USER_NAME_KEY, userName);
}
function getUserName() {
    formInput.classList.remove('hide');
    formDelete.classList.add('hide');
}

function handleSubmit(e) {
    e.preventDefault();
    saveUserName(formInput.value);
    greeting(formInput.value);
    formInput.value = '';
}
function handleDelClick(e) {
    localStorage.removeItem(USER_NAME_KEY);
    formText.innerText = '';

    loadUserName();
}
document.querySelector('form').addEventListener('submit', handleSubmit);
formDelete.addEventListener('click', handleDelClick);

function greeting(userName) {
    formInput.classList.add('hide');
    formDelete.classList.remove('hide');
    formText.innerText = `hello, ${userName}`;
}
function loadUserName() {
    const currentUserName = localStorage.getItem(USER_NAME_KEY);
    if (
        currentUserName &&
        currentUserName !== undefined &&
        currentUserName !== null
    ) {
        //thereis user

        greeting(currentUserName);
    } else {
        getUserName();
    }
}

loadUserName();
