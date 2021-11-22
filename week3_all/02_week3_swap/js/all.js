// 圖片資料
const photoArr = [
  'flower.png',
  'light.png',
  'quiet.png',
  'tent.jpg',
  'tripod.png',
];

// 選取 DOM
const photo = document.querySelector('.photo');
const photoIndex = document.querySelector('.photoFrame_index');

// 圖片資料 Arr index
let count = 0;

// 監聽事件
photo.addEventListener('click', () => {
  addPhotoIndex();
  changePic(count);
});

// 轉換圖片函數
function changePic(index) {
  photo.src = `./images/${photoArr[index]}`;
  photo.alt = `${photoArr[index]} picture`;
}

// 改變頁碼函數
function addPhotoIndex() {
  count++;
  count = count % 5;
  photoIndex.textContent = `${count + 1} / ${photoArr.length} `;
}
