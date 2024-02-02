import { useState } from "react";

import { Move } from "../../../../types";

export const MovesMenuItem: React.FC<{
  move: Move;
  name: string | undefined;
}> = ({ move, name }) => {
  const [moveSelected, setMoveSelected] = useState(move!.pp);
  const handleClick = () => {
    if (0 < moveSelected) setMoveSelected(moveSelected - 1);
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
