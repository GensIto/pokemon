import { UsePokemonStore } from "../../store/UsePokemonStore";

import { MyPokemon } from "./components/MyPokemon/MyPokemon";

export const Battle = () => {
  const { frontUrl } = UsePokemonStore();
  return (
    <div className='grid grid-cols-2 gap-4 p-12 h-screen max-w-screen-xl mx-auto'>
      <div />
      <div className='flex flex-col justify-center items-center w-full '>
        {frontUrl && <img className='w-48' src={frontUrl} alt='相棒' />}
      </div>
      <MyPokemon />
      <div />
    </div>
  );
};
