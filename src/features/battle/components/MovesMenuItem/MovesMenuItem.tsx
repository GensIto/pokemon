import { useState } from "react";

import { Move } from "../../../../types";

export const MovesMenuItem: React.FC<{
  move: Move;
  name: string | undefined;
  pokemonHp: number | undefined;
  setPokemonHp: (value: number) => void;
}> = ({ move, name, pokemonHp, setPokemonHp }) => {
  const [moveSelected, setMoveSelected] = useState(move!.pp);
  const handleClick = () => {
    if (0 < moveSelected) setMoveSelected(moveSelected - 1);
    pokemonHp && setPokemonHp(pokemonHp - move.power);
  };
  return (
    <li
      className='grid grid-cols-2 gap-2 border-2 p-2 rounded-md bg-base-300 text-sm cursor-pointer'
      onClick={handleClick}
      key={move.id}
    >
      <p>{name}</p>
      <p>威力: {move.power}</p>
      <p>PP: {moveSelected}</p>
      <p>命中: {move.accuracy}</p>
    </li>
  );
};
