const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secoEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', function (e) {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const minut = time.getMinutes();
  const second = time.getSeconds();
  const hourForClock = hour % 12; // Convert to 12-hour format
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Rotate hands based on time
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(minut, 0, 59, 0, 360)}deg)`;
  secoEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

  // Update the time and date display
  timeEl.innerHTML = `${hourForClock}:${minut < 10 ? `0${minut}` : minut} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle"> ${date}</span>`;
}

// Scaling function to calculate rotation degrees
const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

// Initial call to set the time
setTime();

// Update time every second (1000ms)
setInterval(setTime, 1000);
