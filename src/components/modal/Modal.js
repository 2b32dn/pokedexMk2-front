import React from 'react';
import Capitalize from '../../tools/Capitalize'

const Modal = ({ show, pokemon, pokemonExtra }) => {
	let modalClasses = 'modal-hidden';
	if (show) {
		modalClasses = 'modal';
  }
  // console.log(pokemon)
  // console.log(pokemonExtra)
	return pokemon ? (
		<div className={modalClasses}>
			<img alt={pokemon.name} src={pokemon.sprites.front_default} />
      {Capitalize(pokemon.name)}
      {pokemon.id}
			{pokemon.types.map((type) => <div key={type.type.name}>{Capitalize(type.type.name)}</div>)}
			{pokemon.abilities.map((ability) => <div key={ability.ability.name}>{Capitalize(ability.ability.name)}</div>)}
			{pokemon.stats.map((stat) => (
				<div key={stat.stat.name}>
					{Capitalize(stat.stat.name)}:{stat.base_stat}
				</div>
      ))}
      {pokemon.moves.map(move=> <div key={move.move.name}>{Capitalize(move.move.name)}</div>)}
		</div>
	) : (
		<div className={modalClasses}>No Data</div>
	);
};

export default Modal;
