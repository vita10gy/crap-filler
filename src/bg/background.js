
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript({
     file: '/src/fill/filler.js'
    });
});

