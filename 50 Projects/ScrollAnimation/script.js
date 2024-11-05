const boxes = document.querySelectorAll('.box');
loade();
window.addEventListener('scroll', loade);

function loade() {
  const trigerrBottom = window.innerHeight - 180;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigerrBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}