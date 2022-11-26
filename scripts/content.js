const templateB = document.querySelectorAll("td .farm_icon_b");
const currentLocation = document.location.search.split("=")[2];
const ASSISTANT_FARMER_LOCATION = "am_farm"

const config = {
  timeout: 500,
  reload: 1000 * 60 * 5,
};

const farm = () => {
  console.log("Farm working");
  let i = 1;

  const idInterval = setInterval(() => {
    const unitItemLight = Number(document.querySelector(".unit-item-light").innerHTML);

    if (i < templateB.length && unitItemLight >= 3) {
      templateB[i].click();
      i++
    } else {
      clearInterval(idInterval);
      console.log("Farm NOT working");
    }
  }, config.timeout);
};

if (currentLocation === ASSISTANT_FARMER_LOCATION) {
  farm();
}

setInterval(() => {
  document.location.reload();
}, config.reload);
