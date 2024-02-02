import { UsePokemonStore } from "../../../../store/UsePokemonStore";
import { MovesMenu } from "../MovesMenu";

export const MyPokemon: React.FC<{
  pokemonHp: number | undefined;
  setPokemonHp: (value: number | undefined) => void;
}> = ({ pokemonHp, setPokemonHp }) => {
  const { backUrl, moves, pokemonName } = UsePokemonStore();
  return (
    <div className='flex flex-col justify-center items-center w-full '>
      {backUrl && <img className='w-48' src={backUrl} alt='相棒' />}
      <ul className='grid grid-cols-2 gap-4 h-min'>
        {pokemonName && (
          <MovesMenu
            pokemonHp={pokemonHp}
            setPokemonHp={setPokemonHp}
            pokemonName={pokemonName}
            moves={moves}
          />
        )}
      </ul>
    </div>
  );
};
