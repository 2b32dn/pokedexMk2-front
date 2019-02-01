import React from 'react';
// import Capitalize from '../../tools/Capitalize'

const Modal = ({ show, pokemon, pokemonExtra }) => {
	let modalClasses = 'modal-hidden';
	if (show) {
		modalClasses = 'modal';
  }
  console.log(pokemon)
  console.log(pokemonExtra)
	return pokemon ? (
		<div className={modalClasses}>
			<img alt={pokemon.name} src={pokemon.sprites.front_default} />
      {pokemon.name}
      {pokemon.id}
      {pokemonExtra.genera[2].genus}
			{pokemon.types.map((type) => <div key={type.type.name}>{type.type.name}</div>)}
			{pokemon.abilities.map((ability) => <div key={ability.ability.name}>{ability.ability.name}</div>)}
			{pokemon.stats.map((stat) => (
				<div key={stat.stat.name}>
					{stat.base_stat}:{stat.stat.name}
				</div>
      ))}
      {pokemon.moves.map(move=> <div key={move.move.name}>{move.move.name}</div>)}
      {pokemonExtra.flavor_text_entries[1].flavor_text}
		</div>
	) : (
		<div className={modalClasses}>No Data</div>
	);
};

export default Modal;
