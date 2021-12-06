// 資料
let data = {
  1: 'technology.json',
  2: 'daily.json',
  3: 'food.json',
  4: 'activity.json',
};

// 選取 DOM
const ad = document.querySelector('#Ad');

// 監聽事件
ad.addEventListener('click', function (e) {
  const now = new Date();
  const exp = new Date(now.setDate(now.getDate() + 1));
  document.cookie = `cate=${
    e.target.dataset.cate
  } ;expires=${exp.toUTCString()}`;
});

// 渲染
(function render() {
  if (document.cookie) {
    const cookieObj = parseCookie();
    renderCookieByCate(cookieObj.cate);
  } else {
    getAdData('./api/normal.json');
  }
})();

// 依據 cate 值決定廣告內容
function renderCookieByCate(cate) {
  cate = parseInt(cate);
  let apiPath = `./api/${data[cate]}`;
  getAdData(apiPath);
}

// 取得資料
function getAdData(path) {
  let apiPath = path;
  ad.textContent = 'loading...';
  fetch(apiPath)
    .then((res) => res.json())
    .then((data) => setAdTemplate(data))
    .catch((err) => console.log(err));
}

// 將廣告加入
function setAdTemplate(data) {
  let str = '';
  data.forEach((el) => {
    str += `
      <a href="${el.url}" class="ad__cntr" target="_blank">
        <figure class="ad__inner">
            <img class="img-resp" src="./images/${el.src}" width="500" height="330" alt="ad" data-cate="${el.cate}">
        </figure>
      </a>
      `;
  });
  ad.innerHTML = str;
}

// 處理 cookie 字串
function parseCookie() {
  const cookieObj = {};
  const cookieArr = document.cookie.split(';');

  cookieArr.forEach((cookie) => {
    const arr = cookie.trim().split('=');
    cookieObj[arr[0]] = arr[1];
  });
  return cookieObj;
}
