const axios = require('axios').default;

const getPokemon = async (id) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return pokemon;
};

export default getPokemon;