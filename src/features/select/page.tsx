import { eeveeURL, pikachuURL } from "../../constants";

import { PokemonCard } from "./components/PokemonCard/PokemonCard";

export const Select = () => {
  return (
    <div className='flex py-10 items-start gap-8 justify-center'>
      <PokemonCard apiURL={pikachuURL} />
      <PokemonCard apiURL={eeveeURL} />
    </div>
  );
};
