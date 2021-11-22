let carouselImg = document.querySelector('.carouselImg');
let count = 0;
setInterval(() => {
  carouselImg.src = `./images/photo${(count++ % 5) + 1}.jpg`;
}, 2000);
