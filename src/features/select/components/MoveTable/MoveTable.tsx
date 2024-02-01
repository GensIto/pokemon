import React from "react";

import { PokemonNames } from "../../../../store/UsePokemonStore";
import { Move } from "../../../../types";
import { Table } from "../../../components/Table";
import { MoveCell } from "../MoveCell";
import { MoveCheckboxCell } from "../MoveCheckboxCell";

export const MoveTable: React.FC<{
  data: Move[] | undefined;
  pokemonName: PokemonNames | undefined;
}> = ({ data, pokemonName }) => {
  if (!data) return <p>no data</p>;
  return (
    <Table
      items={data.map((item) => item)}
      renderColumns={[
        {
          title: <th>select</th>,
          Cell: ({ item }) => (
            <MoveCheckboxCell pokemonName={pokemonName} data={item} />
          ),
        },
        {
          title: <th>わざ</th>,
          Cell: ({ item }) => (
            <MoveCell
              propName={
                item.names.find((name) => name.language.name === "ja")?.name
              }
            />
          ),
        },
        {
          title: <th>威力</th>,
          Cell: ({ item }) => <MoveCell propName={item.power} />,
        },
        {
          title: <th>PP</th>,
          Cell: ({ item }) => <MoveCell propName={item.pp} />,
        },
        {
          title: <th>命中</th>,
          Cell: ({ item }) => <MoveCell propName={item.accuracy} />,
        },
      ]}
    />
  );
};
