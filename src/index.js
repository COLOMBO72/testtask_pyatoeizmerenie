import 'normalize.css';
import './styles/main.scss';

let card2 = document.getElementsByClassName('under_row2--card');
let card1 = document.getElementsByClassName('under_row1--card');
let card768 = document.getElementsByClassName('under_row1--card768');
let bigcard1 = document.getElementsByClassName('under_row1--big_card');
let cardlogo = document.getElementsByName('card_logo');
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var closeEl = document.getElementsByClassName('close')[0];
let inputNumber = document.getElementById('inputNumber');

let currentColor;
let currentImage;

inputNumber.oninput = () => phoneMask(inputNumber);

function phoneMask(inputEl) {
  let patStringArr = '+7(___)___-__-__'.split('');
  let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
  let val = inputEl.value;
  let arr = val.replace(/\D+/g, '').split('').splice(1);
  let n;
  let ni;
  arr.forEach((s, i) => {
    n = arrPush[i];
    patStringArr[n] = s;
    ni = i;
  });
  arr.length < 10 ? (inputEl.style.color = 'red') : (inputEl.style.color = 'green');
  inputEl.value = patStringArr.join('');
  n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17);
}

// HOVER CARDS

for (let i = 0; i < card1.length; i++) {
  card1[i].addEventListener('mouseover', function () {
    currentColor = this.style.backgroundColor; //Сохраняю текущий цвет элемента, чтобы после ухода курсора с элемента, можно было вернуть его исходный цвет.
    currentImage = cardlogo[i].src;
    this.style.backgroundColor = '#FFE267';
    cardlogo[i + 1].src = './images/central_logo90gwhite.png';
  });
  card1[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = currentColor;
    cardlogo[i + 1].src = currentImage;
  });
}
for (let i = 0; i < card2.length; i++) {
  card2[i].addEventListener('mouseover', function () {
    currentColor = this.style.backgroundColor; //Сохраняю текущий цвет элемента, чтобы после ухода курсора с элемента, можно было вернуть его исходный цвет.
    currentImage = cardlogo[i + 2].src;
    this.style.backgroundColor = '#FFE267';
    cardlogo[i + 2].src = 'images/central_logo90gwhite.png';
  });
  card2[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = currentColor;
    cardlogo[i + 2].src = currentImage;
  });
}
for (let i = 0; i < bigcard1.length; i++) {
  bigcard1[i].addEventListener('mouseover', function () {
    currentColor = this.style.backgroundColor; //Сохраняю текущий цвет элемента, чтобы после ухода курсора с элемента, можно было вернуть его исходный цвет.
    currentImage = cardlogo[i].src;
    this.style.backgroundColor = '#FFE267';
    cardlogo[i].src = './images/central_logo90gwhite.png';
  });
  bigcard1[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = currentColor;
    cardlogo[i].src = currentImage;
  });
}

// HOVER FOR CARD 768

for (let i = 0; i < card768.length; i++) {
  card768[i].addEventListener('mouseover', function () {
    currentColor = this.style.backgroundColor; //Сохраняю текущий цвет элемента, чтобы после ухода курсора с элемента, можно было вернуть его исходный цвет.
    currentImage = cardlogo[i].src;
    this.style.backgroundColor = '#FFE267';
    cardlogo[i + 1].src = './images/central_logo90gwhite.png';
  });
  card768[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = currentColor;
    cardlogo[i + 1].src = currentImage;
  });
}

// MODAL WINDOW

btn.onclick = function () {
  modal.style.display = 'block';
};

closeEl.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
