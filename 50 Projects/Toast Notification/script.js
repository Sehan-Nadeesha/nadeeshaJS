const button = document.getElementById('btn');
const toast = document.getElementById('toasts');

const message = ['Information Massege One ', 'Error Massege Two', 'Success Massege Three']

const type = ['info', 'error', 'success']

let randomNumber

button.addEventListener('click', () => createNotification())

const createNotification = function () {

  randomNumber = Math.floor(Math.random() * message.length)

  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type[randomNumber]);

  notif.innerText = message[randomNumber];

  toast.appendChild(notif);

  setTimeout(() => { notif.remove() }, 2500)

}
