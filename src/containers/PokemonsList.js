import React from 'react';
import Capitalize from '../tools/Capitalize';
// import { Link } from 'react-router-dom'
// import Modal from '../components/modal/Modal'

const PokemonsList = ({ pokemons, show, targetPokemon, pokemonExtra }) => {
	return (
		<div>
			{pokemons.map((base_info) => (
				<div key={base_info.name}>
					<img alt={base_info.name} src={base_info.sprites.front_default} />
					<button
						onClick={() => {
							show();
              targetPokemon(base_info.id);
              pokemonExtra(base_info.id);
						}}
						value={base_info.id}
					>
						{Capitalize(base_info.name)}
					</button>
				</div>
			))}
		</div>
	);
};

export default PokemonsList;
