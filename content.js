const bLinks = document.querySelectorAll("td .farm_icon_b");

let timeout = 338;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  alert(request)
})

const farm = () => {
  let i = 1;

  const idInterval = setInterval(() => {
    const unitItemLight = Number(document.querySelector(".unit-item-light").innerHTML);

    if (i < bLinks.length && unitItemLight >= 3) {
      bLinks[i].click();
      timeout = Math.random() * 100 % 200 + 1000;
      i++

    } else {
      clearInterval(idInterval)
    }
  }, timeout);
}

farm();

setInterval(() => {
  document.location.reload()
}, 1000 * 60 * 5)