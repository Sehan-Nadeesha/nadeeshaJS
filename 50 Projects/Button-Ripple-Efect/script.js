const btn = document.querySelector('.ripple');
btn.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const btnTop = e.target.offsetTop
  const btnLeft = e.target.offsetLeft

  const left = x - btnLeft
  const top = y - btnTop

  const cirlce = document.createElement('span');
  cirlce.classList.add('circle');
  cirlce.style.top = top + 'px'
  cirlce.style.left = left + 'px'

  this.appendChild(cirlce);

  setTimeout(() => cirlce.remove(), 500)

})