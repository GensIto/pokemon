import { UsePokemonStore } from "../../store/UsePokemonStore";

export const Battle = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
        バトル！
      </div>
      <OptionList />
    </div>
  );
};

const OptionList = () => {
  const { frontUrl, backUrl, status, moves, pokemonName } = UsePokemonStore();
  console.log("OptionList", frontUrl);
  console.log("OptionList", status);
  console.log("OptionList", backUrl);
  console.log("OptionList", moves);
  return (
    <div>
      <ul>
        {pokemonName === "pikachu" &&
          moves?.pikachu?.map((move) => (
            <li key={move.id}>
              <p>
                {move.names.find((name) => name.language.name === "ja")?.name}
              </p>
              <p>{move.power}</p>
              <p>{move.pp}</p>
              <p>{move.accuracy}</p>
            </li>
          ))}
        {pokemonName === "eevee" &&
          moves?.eevee?.map((move) => (
            <li key={move.id}>
              <p>
                {move.names.find((name) => name.language.name === "ja")?.name}
              </p>
              <p>{move.power}</p>
              <p>{move.pp}</p>
              <p>{move.accuracy}</p>
            </li>
          ))}
      </ul>
      {backUrl && <img src={backUrl} alt='相棒' />}
    </div>
  );
};
