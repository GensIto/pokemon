import { useState, useEffect } from "react";
import useSWR from "swr";

import { fetcher } from "../../../functions";
import { Pokemon, Move } from "../../../types";

export const usePokemonDatas = (apiURL: string) => {
  const { data: pokemonData, error } = useSWR<Pokemon>(apiURL, fetcher);
  const [moveList, setMoveList] = useState<Move[]>([]);

  useEffect(() => {
    const fetchMoves = async () => {
      if (pokemonData?.moves) {
        const moves = await Promise.all(
          pokemonData.moves.map(({ move }) =>
            fetch(move.url).then((res) => res.json())
          )
        );
        setMoveList(moves);
      }
    };

    fetchMoves();
  }, [pokemonData]);

  return { pokemonData, moveList, error };
};
