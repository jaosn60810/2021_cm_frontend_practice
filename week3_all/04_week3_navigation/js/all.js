const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item__body');

nav.addEventListener('mouseover', dropdown);
nav.addEventListener('mouseleave', removeDropdown);

function dropdown(e) {
  if (e.target.classList[0] === 'nav__item__head') {
    if (
      e.target.textContent == '聯絡掌櫃' ||
      e.target.textContent == '回到首頁'
    ) {
      return;
    }
    removeDropdown();
    e.target.nextElementSibling.classList.add('js-nav__item__body');
  }

  if (e.target.classList[0] === 'nav__item__body__item') {
    removeContentItemActive();
    e.target.classList.add('js-nav__item__body__item');
  }
}

function removeDropdown() {
  removeContentItemActive();
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('js-nav__item__body');
  }
}

function removeContentItemActive() {
  const nowNavContent = document.querySelector('.js-nav__item__body');
  if (nowNavContent === null) {
    return;
  }
  const arr = nowNavContent.children;
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('js-nav__item__body__item');
  }
}
