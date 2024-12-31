const colors = [
  ['#ff9a9e', '#fad0c4'],
  ['#fbc2eb', '#a6c1ee'],
  ['#84fab0', '#8fd3f4'],
  ['#cfd9df', '#e2ebf0']
];
let index = 0;

setInterval(() => {
  index = (index + 1) % colors.length;
  const [color1, color2] = colors[index];
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
}, 2000);