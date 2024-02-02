import { PokemonNames, PokemonMoves } from "../../../../store/UsePokemonStore";
import { MovesMenuItem } from "../MovesMenuItem";

export const MovesMenu: React.FC<{
  pokemonName: PokemonNames;
  moves: PokemonMoves;
}> = ({ pokemonName, moves }) => {
  return moves?.[pokemonName]?.map((move) => (
    <MovesMenuItem
      move={move}
      name={move.names.find((name) => name.language.name === "ja")?.name}
    />
  ));
};
