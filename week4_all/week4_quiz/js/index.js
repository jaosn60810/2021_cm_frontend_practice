// 資料
let jsonData = [];

// 全域變數
const TOTAL_PER_PAGE = 10;
let lastPage = 0;

(function gatData() {
  const apiPath = './data/82156b65f0b623b09a59c7418f506965_export.json';
  const loading = document.querySelector('#Loading');
  loading.classList.add('loading--active');
  document.querySelector('#LoadingDesc').textContent = '資料下載中...請稍候！';
  fetch(apiPath)
    .then((res) => res.json())
    .then((data) => {
      loading.classList.remove('loading--active');
      setPagination(Math.ceil(data.length) / TOTAL_PER_PAGE);
      jsonData = data;
      setTableTemplate(0);
      setPageTemplate(0);
      lastPage = 0;
    })
    .catch((err) => console.log(err));
})();

function setPagination(total) {
  // 設定 Pagination 樣子
  const paginationList = document.querySelector('#PaginationList');
  let str = '';
  for (let i = 0; i < total; i++) {
    str += `
      <li class="pagination__item text-center">
        <a class="pagination__link" href="#" data-page="${i}">${i + 1}</a>
      </li>
    `;
  }
  paginationList.innerHTML = str;

  // Pagination 監聽事件
  paginationList.addEventListener('click', changePageNum);
}

// 更改頁面
function changePageNum(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  e.preventDefault();
  setTableTemplate(e.target.dataset.page);
  setPageTemplate(e.target.dataset.page);
}

function setPageTemplate(pageNum) {
  const page = document.querySelector('#PaginationList').children;
  page[lastPage].classList.remove('pagination__item--now');
  page[pageNum].classList.add('pagination__item--now');
  lastPage = pageNum;
}

function setTableTemplate(num) {
  let startIndex = num * TOTAL_PER_PAGE;
  let len = startIndex + TOTAL_PER_PAGE;
  let str = '';

  for (startIndex; startIndex < len; startIndex++) {
    // 無資料則中斷迴圈
    if (!jsonData[startIndex]) {
      break;
    }

    // 奇偶數列背景顏色不同
    let rowStyle = 'table__row';
    if (startIndex % 2) {
      rowStyle = 'table__row-even';
    }

    let tdName = `
      <td class="table__name">
        ${
          jsonData[startIndex].Url
            ? `<a href="${jsonData[startIndex].Url}" target="_blank">`
            : ''
        }
          ${jsonData[startIndex].Name}
          ${jsonData[startIndex].Url ? `</a>` : ''}
      </td>
      `;

    str += `
      <tr class="${rowStyle}">
        <td class="table__num text-center">${startIndex + 1}</td>
        <td class="text-center">${jsonData[startIndex].City}</td>
        <td class="table__pic pic">
          <figure class="pic__inner">
            <img class="img-resp" src="${
              jsonData[startIndex].PicURL
            }" width="400" height="263" alt="${jsonData[startIndex].Name}">
          </figure>
          <figure class="pic__preview ">
            <img class="img-resp" src="${
              jsonData[startIndex].PicURL
            }" width="400" height="263" alt="${jsonData[startIndex].Name}">
          </figure>
        </td>
        ${tdName}
        <td class="table__desc">
         ${jsonData[startIndex].HostWords.substring(0, 50)}...
        </td>
      </tr>
    `;
  }
  document.querySelector('#TableBody').innerHTML = str;
}
