const container = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slid');
const leftSlide = document.querySelector('.left-slid');
const buttonUp = document.querySelector('.up-btn');
const buttonDown = document.querySelector('.down-btn');
const slideLenth = rightSlide.querySelectorAll('div').length;

let activeIndex = 0;

leftSlide.style.top = `-${(slideLenth - 1) * 100}vh`;

buttonDown.addEventListener('click', () => changeSlide('down'))
buttonUp.addEventListener('click', () => changeSlide('up'))

const changeSlide = function (direction) {
  const slideHight = container.clientHeight;

  if (direction === 'up') {
    activeIndex++
    if (activeIndex > slideLenth - 1) {
      activeIndex = 0
    }
  } else if (direction === 'down') {
    activeIndex--
    if (activeIndex < 0) {
      activeIndex = slideLenth - 1
    }
  }
  rightSlide.style.transform = `translateY(-${activeIndex * slideHight}px)`
  leftSlide.style.transform = `translateY(${activeIndex * slideHight}px)`

}