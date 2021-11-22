// 資料
const data = [
  {
    title: `商業視覺平面設計`,
    content: `開發腦子裡的創意潛能，學習如何創意發想。顏色與整體的基本搭配，平面設計重視哪些概念。學習課程規劃中使用Adobe Photoshop與Adobe Illustrator。實作企業CIS/VI、海報、包裝等。
      從企業商用設計為出發點，從分組討論到設計實作，分工合作，上台發表感受職場提案歷程。加入學習取得素材的攝影課程，拍攝人物及商品，完稿階段加入印刷實務課程，強化後端輸出知識。`,
  },
  {
    title: `數位繪畫`,
    content: `從平面紙本書籍到生活用品以及遊戲動漫、貼圖等，根據平面媒體報導，台灣許多插畫家和網路行銷公司合作，將創作印製成商品販售，不但能賺進額外收入，更能賺到知名度，預估一年就能賺進兩億台幣，若是未來進軍大陸等海外市場，更能增加三億元收入。現在更延伸到廣告、影視以及網路、遊戲、手機APP等多種面向，初估每年海內外『商業插畫』的產值高達五百億台幣！`,
  },
  {
    title: `前端網站架設實務`,
    content: `智慧型手機使用者中有94%的人會透過手機搜尋資訊。響應式網頁設計(Responsive Web Design)簡稱RWD，現已被公認為是網頁設計開發技術的重要趨勢，在不同裝置下改變網頁的佈局排版，包括桌上型電腦、平板電腦或手機，讓各種尺寸的螢幕都可以在同一網站享受最佳的視覺體驗。`,
  },
  {
    title: `創意工業產品設計`,
    content: `其設計構思包含產品的整體外形、各種細節特徵，要考慮產品試用時的人因工程學，甚至是生產流程及材料的選擇，以展現產品的特色，使產品更具魅力與價值。
      其設計構思包含產品的整體外形、各種細節特徵，要考慮產品試用時的人因工程學，甚至是生產流程及材料的選擇，以展現產品的特色，使產品更具魅力與價值。`,
  },
  {
    title: `UI視覺介面設計`,
    content: `隨著數位電子產品的普及，液晶面板，數位平板電腦等相關產品越來越興盛，可以說有螢幕的裝置，就需要UI介面設計，在觸控式智慧型手機的App市場帶動下，更突顯出它的重要性。
      UI設計師主要專注「產品怎麼呈現」。包括使用者與系統之間的溝通介面設計與交互體驗，確立整個視覺風格的統一性，並充分表現產品的定位和特色。
      UX設計師主要考慮「產品用起來的感覺」。對這個網站的印象、感覺，會不會再回訪？參考以人性為導向的重要元素，讓UI呈現更直覺及更貼近人性思維。`,
  },
];

// 選擇 DOM 元素
const tabNav = document.querySelector('.tab_nav');
const tabBodyTitle = document.querySelector('.tab_body_title');
const tabBodyContent = document.querySelector('.tab_body_content');
const tabNavArr = [...tabNav.children];

// 監聽事件
tabNav.addEventListener('mouseover', mouseoverToChangeTabBodyContent);

// 滑鼠滑入後改變文章內容函數
function mouseoverToChangeTabBodyContent(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }
  changeTabBodyContent(tabNavArr.indexOf(e.target));
}

// 改變文章內容成第 index 個函數
function changeTabBodyContent(index) {
  tabNavArr.forEach((item) => item.classList.remove('js-tab_item'));
  tabNavArr[index].classList.add('js-tab_item');
  tabBodyTitle.textContent = data[index].title;
  tabBodyContent.textContent = data[index].content;
}
