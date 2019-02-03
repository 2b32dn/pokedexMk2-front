import React from 'react';
import Capitalize from '../tools/Capitalize';
// import { Link } from 'react-router-dom'
// import Modal from '../components/modal/Modal'

const PokemonsList = ({ pokemons, show, targetPokemon, pokemonExtra }) => {
	// async function loadingPokemonData(id) {
	// 	try {
	// 		const pokemon = await Promise.all(targetPokemon(id), pokemonExtra(id));
	// 		return pokemon;
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }
	return (
		<div className="pokemon-main">
			{pokemons.map((base_info) => (
				<div key={base_info.name} className="pokemon-spotlight">
					<img alt={base_info.name} src={base_info.sprites.front_default} />
					<button
						onClick={() => {
							// loadingPokemonData(base_info.id);
							show();
							targetPokemon(base_info.id)
							pokemonExtra(base_info.id)
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
