import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
import { getPokemons } from '../API';
import Capitalize from '../tools/Capitalize'

class PokemonsPage extends Component {
  state = { 
    pokemons: null
   }

  componentDidMount = async () => {
    try{
      const pokemons = await getPokemons();
      console.log(pokemons)
      const pokemonData = await Promise.all(
        pokemons.results.map( async result => {
          const pokemon = await fetch(result.url)
          return pokemon.json()
        })
      )
      this.setState({pokemons: pokemonData})
    } catch (err) {
      console.log(err)
    }
  }
  
  render() { 
    const { pokemons } = this.state;
    console.log(pokemons)
    return ( 
      ( pokemons ) 
      ? 
        <div> 
          {this.state.pokemons.map( base_info => 
            <div key={base_info.name}>
              <img alt={base_info.name} src={base_info.sprites.front_default}/>
              {Capitalize(base_info.name)}
            </div>)}
        </div>
      :
        <div>No Pokemons..</div>
     );
  }
}
 
export default PokemonsPage;