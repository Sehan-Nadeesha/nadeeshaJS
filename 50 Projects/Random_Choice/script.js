const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTag(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => { e.target.value }, 30)
    randomSelect()
  }
})

function createTag(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl)
  });
}

function randomSelect() {
  const times = 20;
  const inverval = setInterval(() => {
    const randomTag = pikRandomTag();
    choose(randomTag);
    setTimeout(() => { unchoose(randomTag) }, 100)
  }, 100);

  setTimeout(() => {
    clearInterval(inverval);
    setTimeout(() => {
      const seleceted = pikRandomTag();
      choose(seleceted)
    }, 200)
  }, times * 200)
}

function pikRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}

function choose(tag) {
  tag.classList.add('choose')
}
function unchoose(tag) {
  tag.classList.remove('choose')
}