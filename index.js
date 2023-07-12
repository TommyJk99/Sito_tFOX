function h1Text() {
  document.querySelector("h1").innerText = ";)";
}

function backgroundColor() {
  document.querySelector("body").style.backgroundColor = "#739E8D";
}

function changeAddress() {
  const addresses = document.querySelectorAll("p[class='footer address']");
  addresses[0].innerText = "Via Manzoni 4";
  addresses[1].innerText = "2022 HB Italy";
}

function linkBold() {
  const links = document.querySelectorAll("a:not(.c-invert)");
  for (const link of links) {
    link.style.fontWeight = "bold";
    link.style.color = "blue";
  }
}

function hideImagesTab() {
  const images = document.querySelectorAll("table img");
  for (const image of images) {
    image.style.visibility = "hidden";
  }
}

function randomColorPriceTab() {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);
  const prices = document.querySelectorAll("td[class = 'adjust-price']");
  for (const price of prices) {
    price.style.color = `rgb(${random1},${random2},${random3})`;
  }
}
