import React from 'react';
import Capitalize from '../tools/Capitalize';
// import { Link } from 'react-router-dom'
// import Modal from '../components/modal/Modal'

const PokemonsList = ({ pokemons, show, targetPokemon, pokemonExtra }) => {
	async function loadingPokemonData(id) {
		try {
			const pokemon = await Promise.all(targetPokemon(id), pokemonExtra(id));
			return pokemon;
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div>
			{pokemons.map((base_info) => (
				<div key={base_info.name}>
					<img alt={base_info.name} src={base_info.sprites.front_default} />
					<button
						onClick={() => {
							loadingPokemonData(base_info.id);
							show();
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
