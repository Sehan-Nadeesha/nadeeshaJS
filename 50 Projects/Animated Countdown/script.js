const nums = document.querySelectorAll('.num span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation();

function runAnimation() {
  nums.forEach((number, index) => {
    const nextToLast = nums.length -1

    number.addEventListener('animationend', (e) => {
      if (e.animationName==='goIn' && index !== nextToLast) {
        number.classList.remove('in')
        number.classList.add('out')
      }else if(e.animationName==='goOut' && number.nextElementSibling){
        number.nextElementSibling.classList.add('in')
      }else{
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    
  })
})}

function resetDom(){
counter.classList.remove('hide')
finalMessage.classList.remove('show')

nums.forEach((number) => {
  number.classList.value = ''
})
nums[0].classList.add('in')
}

replay.addEventListener('click', () => {
  resetDom();
  runAnimation();
})