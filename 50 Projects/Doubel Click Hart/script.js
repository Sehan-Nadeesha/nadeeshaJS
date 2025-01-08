const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('.times');

let clickCount = 0;

loveMe.addEventListener('dblclick', (e) => {
  createHeart(e);
})

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xinside = x - leftOffset;
  const yinside = y - topOffset;

  heart.style.top = `${yinside}px`
  heart.style.left = `${xinside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++clickCount

  setTimeout(() => heart.remove(), 1000)

}