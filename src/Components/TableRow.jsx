import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TableRow = ({ id, Title, Author, handleDelete, handleEdit }) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{Title}</td>
      <td>{Author}</td>
      <td className="flex gap-4">
        <button
          onClick={() => handleEdit(id)}
          className="btn btn-sm btn-circle btn-outline bg-cyan-300"
        >
          <MdEdit className="text-lg" />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-sm btn-circle btn-outline bg-yellow-300"
        >
          <MdDelete className="text-lg" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
