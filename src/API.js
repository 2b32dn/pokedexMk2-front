const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=60/"

export async function getPokemons () {
  const response = await fetch(API_URL)
  return response.json()
}