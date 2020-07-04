(function () {
    const paragraphs = document.getElementsByTagName('p');

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerText = 'hello';
    }
    alert('paragraphs changed');
})();
