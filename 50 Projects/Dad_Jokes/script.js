const jokeEl = document.getElementById('joke');
document.getElementById('joke-btn').addEventListener('click', genarateJoke);

genarateJoke();

function genarateJoke() {
  const config = {
    headers: { 'Accept': 'application/json' },
  }

  fetch('https://icanhazdadjoke.com', config).then(req => req.json()).then(data => jokeEl.innerHTML = data.joke)
}
