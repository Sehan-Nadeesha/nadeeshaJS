const smallCup = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters')
const remainder = document.getElementById('remained')
const percentage = document.getElementById('percentage');

updateCup();

smallCup.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCup(idx))
});

function fillCup(idx) {

  if (smallCup[idx].classList.contains('fill')) {
    idx--;
  }

  smallCup.forEach((cup, idx2) => {

    if (idx2 <= idx) {
      cup.classList.add('fill');
    } else {
      cup.classList.remove('fill');
    }
  })
  updateCup();
}

function updateCup() {
  const fillCup = document.querySelectorAll('.fill').length;
  const totleCup = smallCup.length;
  if (fillCup === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = `visible`;
    percentage.style.height = `${fillCup / totleCup * 250}px`
    percentage.innerText = `${fillCup / totleCup * 100}%`
  }
  if (totleCup === fillCup) {
    remainder.style.visibility = 'hidden';
    remainder.style.height = '0';
  } else {
    remainder.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fillCup / 1000)} L`
  }
}