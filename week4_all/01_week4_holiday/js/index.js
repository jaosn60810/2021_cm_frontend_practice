const apiPath =
  'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ';
const imgPath = 'https://cloud.culture.tw';

// 選取 DOM
const cardGroup = document.querySelector('#CardGroup');
const festivalTotalNum = document.querySelector('#FestivalTotalNum');

(function render() {
  getData();
})();

function getData() {
  fetch(apiPath)
    .then((res) => res.json())
    .then((data) => {
      setTemplate(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function setTemplate(data) {
  festivalTotalNum.textContent = data.length;
  let elStr = '';
  data.forEach((el) => {
    elStr += `
    <a href="${el.website}" class="card" target="_blank">
    <div class="card__img">
      <img src="${imgPath + el.imageUrl}" alt="${
      el.actName
    }" width="1024" height="683" class="img-resp">
    </div>
    <div class="card__body">
      <h3 class="card__org">${el.org}</h3>
      <h4 class="card__name">${el.actName}</h4>
      <p class="card__desc">${el.description}</p>
    </div>
  </a>
      `;
  });
  cardGroup.innerHTML = elStr;
}
