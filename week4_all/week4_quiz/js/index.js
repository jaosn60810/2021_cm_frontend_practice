// 監聽事件
window.addEventListener('scroll', scrollFadeIn);

// 選取 DOM
let contentHeadArr = document.querySelectorAll('#js-content_head');
let contentBodyArr = document.querySelectorAll('#js-content_body');

function scrollFadeIn() {
  let scrollTop = window.scrollY + window.screen.height / 2;
  for (let i = 0; i < contentHeadArr.length; i++) {
    if (scrollTop >= contentHeadArr[i].offsetTop) {
      fadeIn(contentHeadArr[i]);
    }
  }
  for (let i = 0; i < contentBodyArr.length; i++) {
    if (scrollTop >= contentBodyArr[i].offsetTop) {
      fadeIn(contentBodyArr[i]);
    }
  }
}

function fadeIn(item) {
  item.style.transform = 'translateY(0)';
  item.style.opacity = 1;
}
