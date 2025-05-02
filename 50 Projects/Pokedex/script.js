const pokemonContainer = document.getElementById('container')
const pokemonCount = 120;

const colors = {
  normal: '#f5f5dc',     // light beige
  fire: '#ffdfdf',       // soft red/pink
  water: '#d6f0ff',      // soft sky blue
  electric: '#fff9cc',   // light pastel yellow
  grass: '#ddffdd',      // light green
  ice: '#ddf9ff',        // pale blue
  fighting: '#ffdddd',   // muted red
  poison: '#f5ddff',     // pale purple
  ground: '#f0e0c0',     // sandy beige
  flying: '#e8e8ff',     // pale lavender
  psychic: '#ffe0f0',    // light pink
  bug: '#f0f8dd',        // soft green-yellow
  rock: '#e0d8c0',       // light brown
  ghost: '#e8ddf8',      // soft lavender
  dragon: '#e0e0ff',     // light indigo
  dark: '#dcdcdc',       // soft gray
  steel: '#e6e6e6',      // light metallic gray
  fairy: '#ffe6f0'       // pastel pink
};

const typeColor = Object.keys(colors)
console.log(typeColor)

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);

  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
const pokemonId = pokemon.id.toString().padStart(3,'0')

const poke_type =pokemon.types.map(data => data.type.name);
const pokemonType = typeColor.find(type => poke_type.indexOf(type) > -1)

pokemonEl.style.backgroundColor = colors[pokemonType]

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="">
    </div>
    <div class="info">
      <span class="number">#${pokemonId}</span>
      <h3 class="name">${pokemonName}</h3>
      <small class="type">Type: <span>${pokemonType}</span></small>
    </div>`;
    pokemonEl.innerHTML = pokemonInnerHTML;

    pokemonContainer.appendChild(pokemonEl);
}

fetchPokemon()