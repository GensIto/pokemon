import { memo } from "react";

import { CheckboxCounterProvider } from "../../../../store/UseCheckboxCounterStore";
import { PokemonNames } from "../../../../store/UsePokemonStore";
import { usePokemonDatas } from "../../hooks/usePokemonDatas";
import { JapaneseName } from "../JapaneseName/JapaneseName";
import { MoveSection } from "../MoveSection";
import { PokemonImage } from "../PokemonImage";
import { getImageURL } from "../PokemonImage/functions";
import { SubmitButton } from "../SubmitButton";
import { TypeList } from "../TypeList";

export const PokemonCard: React.FC<{ apiURL: string }> = memo(({ apiURL }) => {
  const { pokemonData, moveList, error } = usePokemonDatas(apiURL);

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
          <PokemonImage frontUrl={frontUrl} alt={pokemonData.name} />
          <TypeList pokemonData={pokemonData} />
          <MoveSection pokemonData={pokemonData} moveList={moveList} />
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
