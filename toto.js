const heng = [];

for(let i = 1; i <= 49; i++) {
  heng.push(i);
};


const btn = document.getElementById('btn');
const num = document.querySelector('.num')

const getRandomNumberPosition = function() {
  return Math.floor(Math.random() * heng.length);
};


btn.addEventListener('click', function() {
  let luckyNumber = ''
  for(let i = 0; i < 6; i++) {
    luckyNumber += heng[getRandomNumberPosition()]
    if(i < 5) {
      luckyNumber += ','
    }
  };
  num.textContent = luckyNumber
});
