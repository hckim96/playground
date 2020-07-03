const input = document.querySelector('input');

const greet = document.querySelector('#greet');
const originalText = greet.innerText;
function handleInput(e) {
    greet.innerText = originalText + e.target.value;
}

function init() {
    input.addEventListener('input', handleInput);
}

init();
