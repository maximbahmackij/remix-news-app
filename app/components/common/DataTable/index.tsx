import { FC, ReactNode } from "react";

export interface DataTableProps {
  headers: string[];
  children: ReactNode | ReactNode[];
}

export interface DataTableRowProps {
  children: ReactNode | ReactNode[];
}

export interface DataTableColumn {
  children: ReactNode;
}

const DataTable: FC<DataTableProps> = ({ headers, children }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headers.map((header, index) => (
            <th key={`header-${index}`} scope="col" className="px-6 py-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(children) ? children.map((row) => row) : children}
      </tbody>
    </table>
  );
};

const DataTableRow: FC<DataTableRowProps> = ({ children }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {Array.isArray(children) ? children.map((row) => row) : children}
    </tr>
  );
};

const DataTableColumn: FC<DataTableColumn> = ({ children }) => {
  return <td className="px-6 py-4">{children}</td>;
};

export { DataTable, DataTableRow, DataTableColumn };
