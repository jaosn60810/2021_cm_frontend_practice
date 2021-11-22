// 圖檔資料陣列
const data = ['blue3d', 'cloud', 'light', 'line', 'metal', 'pink3d', 'puzzle'];

// 選取 DOM
const thumbnails = document.querySelector('.photo_thumbnails');
const photo = document.querySelector('.photo');

// 變數
let imgNum = 0;

// 監聽事件
thumbnails.addEventListener('mouseover', mouseoverThumbnail);
thumbnails.addEventListener('click', changePhoto);

// 初始化渲染
renderData();

// 初始化渲染資料函數
function renderData() {
  data.forEach((item, index) => {
    thumbnails.innerHTML += `
    <img
    src="./images/${item}-100x65.jpg"
    alt="${item} picture"
    width="100" 
    height="65"
    class="photo_thumbnail img-resp"
    data-num="${index}"
  />
    `;
  });
}

// 滑入縮圖變成半透明函式
function mouseoverThumbnail(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

// 更改下方圖片
function changePhoto(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  imgNum = e.target.dataset.num;
  photo.innerHTML = `
  <img
  src="./images/${data[imgNum]}-920x600.jpg"
  alt="${data[imgNum]} picture"
  class="img-resp"
  width="920"
  height="600"
/>
`;
}
