type TableColumn<Entry> = {
  title: React.ReactElement;
  Cell: ({ item }: { item: Entry }) => React.ReactElement;
  onClick?: () => void;
};

type TableProps<Entry> = {
  items: Entry[];
  renderColumns: TableColumn<Entry>[];
  onClick?: () => void;
};

export const Table = <Entry,>({
  items,
  renderColumns,
  onClick,
}: TableProps<Entry>) => {
  return (
    <table>
      <thead className='sticky top-0 z-10 bg-gray-light'>
        <tr>
          {renderColumns.map(({ title }, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr onClick={onClick} key={i}>
            {renderColumns.map(({ Cell }, ci) => (
              <td key={ci}>
                <Cell item={item} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
