import { useState } from "react";

import { UsePokemonStore } from "../../store/UsePokemonStore";

import { MyPokemon } from "./components/MyPokemon/MyPokemon";

export const Battle = () => {
  const { frontUrl, status } = UsePokemonStore();

  const statNames = status?.stats.map((item) => item.stat.name);
  const statValues = status?.stats.map((item) => item.base_stat);
  const combinedStats = statNames?.reduce(
    (obj: { [key: string]: number }, key, index) => {
      if (statValues) obj[key as string] = statValues[index];
      return obj;
    },
    {}
  );

  const [pokemonHp, setPokemonHp] = useState(combinedStats?.hp);

  if (pokemonHp && pokemonHp <= 0) return <h1>🆑</h1>;

  return (
    <div className='grid grid-cols-2 gap-4 p-12 h-screen max-w-screen-xl mx-auto'>
      <div />
      <div className='flex flex-col justify-center items-center w-full '>
        {combinedStats && <h1 className='text-4xl'>{pokemonHp}</h1>}
        {frontUrl && <img className='w-48' src={frontUrl} alt='相棒' />}
      </div>
      <MyPokemon pokemonHp={pokemonHp} setPokemonHp={setPokemonHp} />
      <div />
    </div>
  );
};
