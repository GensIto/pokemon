import useSWR from "swr";

import { fetcher } from "../../../../functions";
import { Move } from "../../../../types";

export const JapaneseName: React.FC<{
  url: string;
}> = ({ url }) => {
  const { data, error } = useSWR<Move>(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const japaneseName = data.names.find(
    (name) => name.language.name === "ja"
  )?.name;

  return <p>{japaneseName}</p>;
};
