console.log('chrome extension is ready to go!!!');

let paragraphs = document.getElementsByTagName('p');
for (e of paragraphs) {
    e.style['background-color'] = 'red';
}

// content script does not run until the page is loaded (by the def of content script)
