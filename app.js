const heng = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.getElementById('btn');
const num = document.querySelector('.num')

const getRandomNumber = function() {
  return Math.floor(Math.random() * heng.length);
};


btn.addEventListener('click', function() {
  let luckyNumber = ''
  for(let i = 0; i < 4; i++) {
    luckyNumber += heng[getRandomNumber()]
  };
  num.textContent = luckyNumber
});
