const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
let text = 'I Love Programing...'

let idx = 1;
let speed = 300 / speedEl.value

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

writing();

function writing() {

  if (idx > text.length) {
    setTimeout(deleting, 2000)
  } else {
    textEl.innerText = text.slice(0, idx);
    idx++
    setTimeout(writing, speed)
  }
}
function deleting() {
  if (idx == 1) {
    setTimeout(writing, 2000)
  } else {
    textEl.innerText = text.slice(0, idx);
    idx--
    setTimeout(deleting, speed)
  }
}