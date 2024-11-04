const progress = document.getElementById('progress-bar');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
})
prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
})

circles.forEach((circle, index) => {
  circle.addEventListener('click', function () {
    currentActive = index + 1;
    update();
  })
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true
    next.innerHTML = 'Next';
    next.classList.remove('finish');
  } else if (currentActive === circles.length) {
    next.innerHTML = 'Finish';
    next.classList.add('finish');
  } else {
    prev.disabled = next.disabled = false
    next.innerHTML = 'Next';
    next.classList.remove('finish');
  }


}