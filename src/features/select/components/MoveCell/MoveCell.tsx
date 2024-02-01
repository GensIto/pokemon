import { memo } from "react";

export const MoveCell: React.FC<{
  propName: string | number | undefined;
}> = memo(({ propName }) => {
  return <td>{propName?.toString() ?? "ー"}</td>;
});
