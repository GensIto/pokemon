import { Pokemon } from "../../../../types";
import { JapaneseName } from "../JapaneseName/JapaneseName";

export const TypeList: React.FC<{
  pokemonData: Pokemon;
}> = ({ pokemonData }) => {
  return (
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
  );
};
