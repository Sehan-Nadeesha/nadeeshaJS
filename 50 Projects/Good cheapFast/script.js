const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')


toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrik(e.target)))

function doTheTrik(theCheckOne) {

  if (good.checked && cheap.checked && fast.checked) {

    if (good == theCheckOne) {
      fast.checked = false
    }
    if (cheap == theCheckOne) {
      good.checked = false
    }
    if (fast == theCheckOne) {
      cheap.checked = false
    }

  }

}