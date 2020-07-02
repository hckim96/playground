

const headerTitle = document.querySelector('.h1class');

function handleClick(e) {
    console.log(`e : ${e}`);
    console.log(e.target);
    console.log('headertitleclicked');
    if (e.target.style.color === 'black') {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'black';
    }
}
headerTitle.addEventListener('click', handleClick);
