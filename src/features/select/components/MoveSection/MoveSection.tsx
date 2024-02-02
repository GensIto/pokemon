import { PokemonNames } from "../../../../store/UsePokemonStore";
import { Pokemon, Move } from "../../../../types";
import { MoveTable } from "../MoveTable";

export const MoveSection: React.FC<{
  pokemonData: Pokemon;
  moveList: Move[];
}> = ({ pokemonData, moveList }) => {
  return (
    <>
      <h2>わざ</h2>
      <div className='overflow-y-auto h-48'>
        <MoveTable
          pokemonName={pokemonData?.name as PokemonNames}
          data={moveList}
        />
      </div>
    </>
  );
};
