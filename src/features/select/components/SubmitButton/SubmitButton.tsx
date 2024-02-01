import { useNavigate } from "react-router-dom";

import { UseCheckboxCounterStore } from "../../../../store/UseCheckboxCounterStore";
import {
  PokemonNames,
  UsePokemonStore,
} from "../../../../store/UsePokemonStore";
import { Pokemon } from "../../../../types";

export const SubmitButton: React.FC<{
  frontUrl: string | null;
  backUrl: string | null;
  data: Pokemon;
  pokemonName: PokemonNames;
}> = ({ data, frontUrl, backUrl, pokemonName }) => {
  const navigate = useNavigate();

  const { count } = UseCheckboxCounterStore();
  const { setBackUrl, setFrontUrl, setStatus, setPokemonName } =
    UsePokemonStore();

  const handleSubmit = async () => {
    try {
      await setFrontUrl(frontUrl);
      await setBackUrl(backUrl);
      await setStatus({ stats: data.stats });
      await setPokemonName(pokemonName);
      await navigate("/battle");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='card-actions mt-8'>
      <button
        type='button'
        onClick={handleSubmit}
        className='btn'
        disabled={count < 4}
      >
        君に決めた！
      </button>
    </div>
  );
};
