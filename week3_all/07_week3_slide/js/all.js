let slide = document.querySelector('.slide');
let pageNav = document.querySelector('.pageBtn_wrap');
let nowPage = 0;
let imgArr = [
  '001.jpg',
  '002.jpg',
  '003.jpg',
  '004.jpg',
  '005.jpg',
  '006.jpg',
  '007.jpg',
];

for (let i = 0; i < imgArr.length; i++) {
  slide.innerHTML += `
    <img src="./images/${imgArr[i]}" alt="${imgArr[i]}" width="1025" height="370">
  `;
  pageNav.innerHTML += `
    <li><a href="#" class="pageBtn" data-page="${i}">${i + 1}</a></li>
  `;
}

pageNav.addEventListener('click', clickPageBtn);

goPage();

function clickPageBtn(e) {
  if (e.target.classList[0] !== 'pageBtn') {
    return;
  }
  e.preventDefault();
  nowPage = parseInt(e.target.dataset.page);
  goPage();
}

function goPage() {
  let arr = pageNav.children;
  for (let i = 0; i < arr.length; i++) {
    arr[i].firstElementChild.classList.remove('pageBtn_now');
  }
  arr[nowPage].firstElementChild.classList.add('pageBtn_now');
  slide.style.transform = `translateX(-${nowPage * 100}%)`;
}
