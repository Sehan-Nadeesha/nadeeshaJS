const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName)
    createUsercard(data)
    getRepo(userName)

  } catch (error) {
    console.log(error)
  }
}
async function getRepo(userName) {
  try {
    const { data } = await axios(APIURL + userName + '/repos?sort=created');
    addRepoToCard(data)

  } catch (error) {
    console.log(error)
  }
}

function addRepoToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos.slice(0, 5).forEach(repo => {

    const repoEl = document.createElement('a')
    repoEl.classList.add('repos')
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name; reposEl.appendChild(repoEl);
  });

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user)
    search.value = ''
  }

})

function createUsercard(data) {
  const cardHtml = ` 
  <div class="card">

      <div>
        <img src="${data.avatar_url
    }" alt="${data.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${data.name}</h2>
        <p>
          ${data.bio}
        </p>

        <ul>
          <li>${data.followers} <strong>Followers</strong></li>
          <li>${data.following} <strong>Following</strong></li>
          <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
         
        </div>

      </div>
    </div>`
  document.getElementById('main').innerHTML = cardHtml
}