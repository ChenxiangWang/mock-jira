import React from "react";

export interface TableProps {
  children?: React.ReactNode;
  [x: string]: any;
}

export type TableRowProps = TableProps;
export type TableHeaderProps = TableProps;
export type TableDataProps = TableProps;

export default function Table({ children, ...restProps }: TableProps) {
  return (
    <table {...restProps}>
      <tbody>{children}</tbody>
    </table>
  );
}

Table.Header = function ({ children, ...restProps }: TableHeaderProps) {
  return <th {...restProps}>{children}</th>;
};
Table.Row = function ({ children, ...restProps }: TableRowProps) {
  return <tr {...restProps}>{children}</tr>;
};
Table.Data = function ({ children, ...restProps }: TableDataProps) {
  return <td {...restProps}>{children}</td>;
};
