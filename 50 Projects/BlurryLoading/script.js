const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading');

let load = 0;

let init = setInterval(blurring, 30);

const scale = (num, inStart, inEnd, outStart, outEnd) => { return (num - inStart) * (outEnd - outStart) / (inEnd - inStart) + outStart }

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(init)
  }
  loadingText.innerHTML = `${load} %`;
  loadingText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`
}

