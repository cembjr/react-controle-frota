import React from "react";

interface TableProps {
  colunas: string[];
  hiddenButtons?: boolean;
}
const Table: React.FC<TableProps> = ({ colunas, hiddenButtons, children }) => {
  return (
    <>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            {colunas.map((x) => (
              <th key={x}>{x}</th>
            ))}
            {!hiddenButtons && <th></th>}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export default Table;
