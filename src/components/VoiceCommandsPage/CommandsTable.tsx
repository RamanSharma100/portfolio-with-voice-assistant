import { FunctionComponent as FC } from "react";

import ICommandsTable from "./ICommandsTable";

const CommandsTable: FC<ICommandsTable> = ({ cols, rows, info }) => {
  return (
    <table className="table table-bordered w-50 mx-auto text-white">
      <thead className="shadow text-center">
        <tr>
          {cols.map((col, id) => (
            <th className="text-capitalize" scope="col" key={id}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center text-capitalize">
        <tr>
          <td>
            {rows.map((cmd: string, i: number) => (
              <p
                key={i}
                className="text-center small bg-white text-dark py-1 px-2 my-2"
              >
                {cmd}
              </p>
            ))}
          </td>
          <td>
            <p>{info}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CommandsTable;
