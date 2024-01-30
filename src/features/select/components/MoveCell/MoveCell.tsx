import useSWR from "swr";

import { fetcher } from "../../../../functions";
import { Move } from "../../../../types";

export const MoveCell: React.FC<{
  url: string;
  propName: keyof Move | "japaneseName";
}> = ({ url, propName }) => {
  const { data, error } = useSWR<Move>(url, fetcher);

  if (error) return <td>Failed to load</td>;
  if (!data) return <td>Loading...</td>;

  let value;
  if (propName === "japaneseName") {
    value = data.names.find((name) => name.language.name === "ja")?.name;
  } else {
    value = data[propName];
  }

  return <td>{value?.toString() ?? "ー"}</td>;
};
