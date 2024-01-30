import { memo } from "react";
import useSWR from "swr";

import { fetcher } from "../../../../functions";
import { CounterProvider } from "../../../../store/useCheckCount";
import { Pokemon } from "../../../../types";
import { JapaneseName } from "../JapaneseName/JapaneseName";
import { MoveTable } from "../MoveTable";
import { PokemonImage } from "../PokemonImage";

export const PokemonCard: React.FC<{ apiURL: string }> = memo(({ apiURL }) => {
  const { data, error } = useSWR<Pokemon>(apiURL, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <CounterProvider>
      <div className='card  w-[28rem] bg-base-100 shadow-xl'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>
            <JapaneseName url={data.species.url} />
          </h2>
          <figure>
            <PokemonImage sprites={data.sprites} alt={data.name} />
          </figure>
          <div className='flex gap-2'>
            <h2>タイプ</h2>
            <ul>
              {data.types.map(({ type }, index) => (
                <li key={index}>
                  <JapaneseName url={type.url} />
                </li>
              ))}
            </ul>
          </div>
          <h2>わざ</h2>
          <div className='overflow-y-auto h-48'>
            <MoveTable data={data} />
          </div>
          <div className='card-actions mt-8'>
            <button className='btn'>君に決めた！</button>
          </div>
        </div>
      </div>
    </CounterProvider>
  );
});
