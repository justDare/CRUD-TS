import React from "react";
import { useTable, Row } from "react-table";
import { useHistory } from "react-router-dom";

import "./table.scss";

// Material
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface Props {
  columns: any;
  data: EmployeeI[];
}

const Table: React.FC<Props> = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const history = useHistory();

  const handleRowClick = (row: Row<EmployeeI>) => {
    history.push(`/employee/${row.original.id}`);
  };

  return (
    <div>
      <MaUTable {...getTableProps()} className="custom-table">
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                onClick={() => handleRowClick(row)}
              >
                {row.cells.map((cell) => {
                  cell.value = cell.value.toString();

                  return (
                    <TableCell {...cell.getCellProps()}>{cell.value}</TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </div>
  );
};

export default Table;
