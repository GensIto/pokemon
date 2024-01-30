import { useRef } from "react";
import useSWR from "swr";

import { fetcher } from "../../../../functions";
import { useCounterStore } from "../../../../store/useCheckCount";
import { Move } from "../../../../types";

export const MoveCheckboxCell: React.FC<{
  url: string;
}> = ({ url }) => {
  const { count, increase, decrease } = useCounterStore();
  const { data, error } = useSWR<Move>(url, fetcher);

  const ref = useRef<HTMLInputElement>(null);

  if (error) return <td>Failed to load</td>;
  if (!data) return <td>Loading...</td>;

  const japaneseName = data.names.find(
    (name) => name.language.name === "ja"
  )?.name;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      increase();
    } else {
      decrease();
    }
  };

  return (
    <td>
      <label htmlFor={japaneseName}>
        <input
          ref={ref}
          id={japaneseName}
          type='checkbox'
          className='checkbox'
          onChange={handleChange}
          disabled={count >= 4 && !ref.current?.checked}
        />
      </label>
    </td>
  );
};
