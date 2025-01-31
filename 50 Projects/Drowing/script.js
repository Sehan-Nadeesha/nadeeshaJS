const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

let size = 10;
let color = 'black';
let x, y
let isClick = false

document.getElementById('color').addEventListener('input', function () {
  color = this.value;

});

document.getElementById('clear').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

decrease.addEventListener('click', () => {
  if (size > 5) {
    size -= 5
    document.getElementById('size').innerHTML = size
  }
})
increase.addEventListener('click', () => {
  if (size < 30) {
    size += 5
    document.getElementById('size').innerHTML = size

  }
})

canvas.addEventListener('mousedown', function (e) {
  isClick = true;
  x = e.offsetX;
  y = e.offsetY;

})

canvas.addEventListener('mouseup', function (e) {
  isClick = false
  x = undefined
  y = undefined
})
canvas.addEventListener('mousemove', function (e) {
  if (isClick) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2; y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2
  ctx.stroke()
}

