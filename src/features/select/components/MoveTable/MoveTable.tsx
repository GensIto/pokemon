import React from "react";

import { Pokemon } from "../../../../types";
import { Table } from "../../../components/Table";
import { MoveCell } from "../MoveCell";
import { MoveCheckboxCell } from "../MoveCheckboxCell";

export const MoveTable: React.FC<{ data: Pokemon }> = ({ data }) => {
  return (
    <Table
      items={data.moves.map(({ move }) => move)}
      renderColumns={[
        {
          title: <th>select</th>,
          Cell: ({ item }) => <MoveCheckboxCell url={item.url} />,
        },
        {
          title: <th>わざ</th>,
          Cell: ({ item }) => (
            <MoveCell url={item.url} propName='japaneseName' />
          ),
        },
        {
          title: <th>威力</th>,
          Cell: ({ item }) => <MoveCell url={item.url} propName='power' />,
        },
        {
          title: <th>PP</th>,
          Cell: ({ item }) => <MoveCell url={item.url} propName='pp' />,
        },
        {
          title: <th>命中</th>,
          Cell: ({ item }) => <MoveCell url={item.url} propName='accuracy' />,
        },
      ]}
    />
  );
};
