const lables = document.querySelectorAll('.form-controler label');

lables.forEach(lable => lable.innerHTML = lable.innerText.split('').map((letter, index) => `<span style ="transition-delay: ${index * 50}ms;">${letter}</span>`).join(''));

