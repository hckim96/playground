const headerTitle = document.querySelector('.clock');

function handleClick(e) {
    if (e.target.style.color === 'black') {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'black';
    }
}

headerTitle.addEventListener('click', handleClick);
