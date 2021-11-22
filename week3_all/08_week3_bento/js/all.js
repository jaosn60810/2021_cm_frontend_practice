let subtotal = 0;
let total = 0;

function writeTotalPrice(subtotal) {
  document.querySelector('#title').textContent = '以下是您的餐點明細：';
  document.querySelector('.subtotal').textContent = subtotal;
  document.querySelector('.discount').textContent = 0.8;
  document.querySelector('.shipping').textContent = 30;
  total = subtotal * 0.8 + 30;
  document.querySelector('.total').textContent = total;
}

document.querySelector('#nextBtn').addEventListener('click', function () {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(document.querySelector('#food' + (i + 1)).value);
  }
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      alert('您輸入的格式有誤！');
      return;
    }
    if (arr[i] <= 0) {
      alert('請選擇數量！');
      return;
    }
  }

  subtotal = arr[0] * 100 + arr[1] * 80 + arr[2] * 70 + arr[3] * 85;

  document.querySelector('#orderForm').classList.remove('form_active');
  document.querySelector('#checkForm').classList.add('form_active');

  writeTotalPrice(subtotal);
});
