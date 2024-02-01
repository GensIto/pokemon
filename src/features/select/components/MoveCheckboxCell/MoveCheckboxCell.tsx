import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { UseCheckboxCounterStore } from "../../../../store/UseCheckboxCounterStore";
import {
  PokemonNames,
  UsePokemonStore,
} from "../../../../store/UsePokemonStore";
import { Move } from "../../../../types";

export const MoveCheckboxCell: React.FC<{
  data: Move;
  pokemonName: PokemonNames | undefined;
}> = ({ data, pokemonName }) => {
  const { count, increase, decrease } = UseCheckboxCounterStore();
  const { setMoves, filterMoves, moves } = UsePokemonStore();

  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increase();
      pokemonName &&
        setMoves({
          ...moves,
          [pokemonName]: [...(moves[pokemonName] || []), data],
        });
    } else {
      decrease();
      pokemonName && filterMoves(pokemonName, data.id);
    }
  };

  const uuid = uuidv4();

  return (
    <td>
      <label htmlFor={uuid}>
        <input
          ref={ref}
          id={uuid}
          type='checkbox'
          className='checkbox'
          onChange={handleChange}
          disabled={count >= 4 && !ref.current?.checked}
        />
      </label>
    </td>
  );
};
