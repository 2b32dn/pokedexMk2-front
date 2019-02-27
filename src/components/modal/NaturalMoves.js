import React from 'react'
import Capitalize from '../../tools/Capitalize'

const NaturalMoves = ({moves}) => {
  let Moves = [];
  moves.map(move => 
     Moves.push(Capitalize(move.move.name).replace(/-/g, ' '))
  )
  console.log(Moves)
  return (
    <div>
      {Moves.sort().map( move => <div key={move}>{move}</div>)}
    </div>
  )
}

export default NaturalMoves
