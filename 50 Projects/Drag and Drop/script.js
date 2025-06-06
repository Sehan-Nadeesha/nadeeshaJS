const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('drop', drop);
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
  this.className = 'fill'
}
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}
function dragOver(e) {
  e.preventDefault()

}
function dragLeave() {
  this.className = 'empty'
}
function drop() {
  this.className = 'empty'
  this.append(fill)
}