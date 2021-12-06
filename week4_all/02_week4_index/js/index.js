// 選取 DOM
const headerDate = document.querySelector('#HeaderDate');
const tableBody = document.querySelector('#IndexTableBody');

// 渲染
(function render() {
  getData();
})();

// 拿資料
function getData() {
  const apiPath = './data/index.json';
  fetch(apiPath)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setDate(data);
    })
    .catch((err) => console.log(err));
}

// 設置指數資料
function setData(data) {
  let elStr = '';
  data.forEach((item, index) => {
    let rowStyle = index % 2 ? 'index-table__row' : '';
    elStr += `
    <tr class="${rowStyle}">
    <td>${item.CommName}</td>
    <td class="text-right">${item.ClosePr}</td>
    <td class="${getRiseOrFall(item.CF)} text-right">${item.CF}</td>
    <td class="${getRiseOrFall(item.CFPercent)} text-right">${
      item.CFPercent
    }</td>
    <td class="text-right">${(item.SalePrice / 10000).toFixed(1)}</td>
  </tr>
        `;
  });
  tableBody.innerHTML = elStr;
}

// 判斷漲跌顏色
function getRiseOrFall(data) {
  if (data >= 0) {
    return 'index-rise';
  } else {
    return 'index-fall';
  }
}

// 設置日期資料
function setDate(data) {
  let dateStr = getDate(data[0].Date, '/');
  headerDate.innerHTML = `<i class="fas fa-calendar-alt header__date-icon"></i>${dateStr}`;
}

// 日期字串處理
function getDate(dateStr, separateIcon) {
  let year = dateStr.substring(0, 4);
  let month = dateStr.substring(4, 6);
  let day = dateStr.substring(6, 8);
  return year + separateIcon + month + separateIcon + day;
}
