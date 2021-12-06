// 選取 DOM
const adCloseBtn = document.querySelector('#AdCloseBtn');
const ad = document.querySelector('#Ad');

// 監聽事件
adCloseBtn.addEventListener('click', function () {
  const now = new Date();
  const exp = new Date(now.setDate(now.getDate() + 1));
  document.cookie = `isAdShow=false; expires=${exp.toUTCString()}`;
  ad.style.display = 'none';
});

(function render() {
  if (document.cookie.includes('isAdShow')) {
    ad.style.display = 'none';
  } else {
    ad.style.display = 'block';
  }
})();
