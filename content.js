const templateB = document.querySelectorAll("td .farm_icon_b");

const config = {
  timeout: 500,
  reload: 100 * 60 * 5,
};

chrome.runtime.onMessage.addListener(function (request) {
  alert(request);
})

const farm = () => {
  let i = 1;

  const idInterval = setInterval(() => {
    const unitItemLight = Number(document.querySelector(".unit-item-light").innerHTML);

    if (i <= templateB.length && unitItemLight >= 3) {
      i++
      templateB[i].click();
    } else {
      clearInterval(idInterval)
    }
  }, config.timeout);
};

farm();

setInterval(() => {
  document.location.reload();
}, config.reload);
