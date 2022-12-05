const templateB = document.querySelectorAll("td .farm_icon_b");
const currentLocation = document.location.search.split("=")[2];
const ASSISTANT_FARMER_LOCATION = "am_farm";

const config = {
  timeout: 500,
  reload: 1000 * 60 * 5,
  lightB: 5,
};

const isFarmLocation = currentLocation === ASSISTANT_FARMER_LOCATION;

const farm = () => {
  console.log("Farm working");
  let i = 1;

  const idInterval = setInterval(() => {
    const unitItemLight = Number(document.querySelector(".unit-item-light").innerHTML);

    if (i < templateB.length && unitItemLight >= config.lightB) {
      templateB[i].click();
      i++;
    } else {
      clearInterval(idInterval);
      console.log("Farm NOT working");
    }
  }, config.timeout);
};

if (isFarmLocation) {
  farm();
}

setInterval(() => {
  if (isFarmLocation) {
    document.location.reload();
  }
}, config.reload);
