console.log('chrome extension is ready to go!!!');

// content script does not run until the page is loaded (by the def of content script)

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse) {
    console.log(request.txt);
    if (request.txt === 'hello') {
        let paragraphs = document.getElementsByTagName('p');
        for (e of paragraphs) {
            e.style['background-color'] = 'red';
        }
    }
}
