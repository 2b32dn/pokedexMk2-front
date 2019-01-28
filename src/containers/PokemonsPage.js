import React, { Component } from 'react';

import { getPokemons } from '../API';

class PokemonsPage extends Component {
  state = { 
    pokemons: null
   }

  componentDidMount = async () => {
    const {pokemons} = await getPokemons();
    this.setState({
      pokemons
    })
  }
  
  render() { 
    const {pokemons} = this.state;
    return ( 
      (pokemons) ? <h2>Pokemons!</h2> : <h2>No Pokemons..</h2>
     );
  }
}
 
export default PokemonsPage;