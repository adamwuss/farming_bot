let running = false;

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick)

  function onclick() {
    running = !running;

    chrome.tabs.query({ currentWindow: true, active: true },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "hi");
      })
  }
});
