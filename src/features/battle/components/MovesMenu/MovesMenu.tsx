import { PokemonNames, PokemonMoves } from "../../../../store/UsePokemonStore";
import { MovesMenuItem } from "../MovesMenuItem";

export const MovesMenu: React.FC<{
  pokemonName: PokemonNames;
  pokemonHp: number | undefined;
  setPokemonHp: (value: number | undefined) => void;
  moves: PokemonMoves;
}> = ({ pokemonName, pokemonHp, setPokemonHp, moves }) => {
  return moves?.[pokemonName]?.map((move) => (
    <MovesMenuItem
      pokemonHp={pokemonHp}
      setPokemonHp={setPokemonHp}
      move={move}
      name={move.names.find((name) => name.language.name === "ja")?.name}
    />
  ));
};
