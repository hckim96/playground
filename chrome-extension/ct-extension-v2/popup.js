const userinput = document.querySelector('.popup-input');

function handleInputChange(e) {
    let queryparams = {
        active: true,
        currentWindow: true,
    };
    chrome.tabs.query(queryparams, gotTab);

    function gotTab(tabs) {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, { txt: e.target.value });
    }
    let msg = {
        txt: '',
    };
    msg.txt = e.target.value;

    console.log(e.target.value);
    document.querySelector('.popup-h1').innerText = e.target.value;
    // chrome.tabs.senMessage(,msg)
}
userinput.addEventListener('input', handleInputChange);
