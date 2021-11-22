let carouselImg = document.querySelector('.carouselImg');
let carousel = document.querySelector('.carousel');
let count = 0;
let toggle = true;

carousel.addEventListener(
  'mouseenter',
  function () {
    toggle = false;
  },
  true
);

carousel.addEventListener(
  'mouseout',
  function (e) {
    toggle = true;
  },
  true
);

setInterval(run, 100);
function run() {
  if (!toggle) {
    return;
  }
  nextImg();
}

document.querySelector('.nextBtn').addEventListener('click', nextImg);
document.querySelector('.prevBtn').addEventListener('click', prevImg);

function nextImg() {
  count = (count++ % 24) + 1;

  carouselImg.src = `./images/pic${count}.jpg`;
}
function prevImg() {
  count = (count-- % 24) - 1;
  if (count <= 0) {
    count += 24;
  }
  carouselImg.src = `./images/pic${count}.jpg`;
}
