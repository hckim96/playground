const body = document.querySelector('body');

const NUM_OF_IMAGES = 5;
function getRandomNumber() {
    return Math.floor(Math.random() * NUM_OF_IMAGES) + 1;
}
function loadBackGround() {
    image = new Image();
    image.src = `./images/${getRandomNumber()}.jpg`;
    body.prepend(image);
    image.classList.add('background-image');
}

loadBackGround();
