import { memo, useEffect, useState } from "react";
import useSWR from "swr";

import { fetcher } from "../../../../functions";
import { CheckboxCounterProvider } from "../../../../store/UseCheckboxCounterStore";
import { PokemonNames } from "../../../../store/UsePokemonStore";
import { Move, Pokemon } from "../../../../types";
import { JapaneseName } from "../JapaneseName/JapaneseName";
import { MoveTable } from "../MoveTable";
import { PokemonImage } from "../PokemonImage";
import { getImageURL } from "../PokemonImage/functions";
import { SubmitButton } from "../SubmitButton";

export const PokemonCard: React.FC<{ apiURL: string }> = memo(({ apiURL }) => {
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

  if (error) return <div>Failed to load</div>;
  if (!pokemonData) return <div>Loading...</div>;

  const { frontUrl, backUrl } = getImageURL(pokemonData.sprites);

  return (
    <CheckboxCounterProvider>
      <div className='card  w-[28rem] bg-base-100 shadow-xl'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>
            <JapaneseName url={pokemonData.species.url} />
          </h2>
          <figure>
            <PokemonImage
              frontUrl={frontUrl}
              backUrl={backUrl}
              alt={pokemonData.name}
            />
          </figure>
          <div className='flex gap-2'>
            <h2>タイプ</h2>
            <ul>
              {pokemonData.types.map(({ type }, index) => (
                <li key={index}>
                  <JapaneseName url={type.url} />
                </li>
              ))}
            </ul>
          </div>
          <h2>わざ</h2>
          <div className='overflow-y-auto h-48'>
            <MoveTable
              pokemonName={pokemonData?.name as PokemonNames}
              data={moveList}
            />
          </div>
          <SubmitButton
            pokemonName={pokemonData?.name as PokemonNames}
            data={pokemonData}
            frontUrl={frontUrl}
            backUrl={backUrl}
          />
        </div>
      </div>
    </CheckboxCounterProvider>
  );
});
