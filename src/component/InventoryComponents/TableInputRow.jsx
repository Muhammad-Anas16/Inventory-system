import React from "react";

const TableInputRow = ({ headers, rowData, setRowData, addRow }) => {
  const handleChange = (header, value) => {
    setRowData((prev) => ({
      ...prev,
      [header]: value,
    }));
  };

  return (
    <tr>
      {headers.map((header, index) => (
        <td
          key={index}
          className="px-4 py-2 border border-slate-300 bg-white text-center"
        >
          {header === "#" ? (
            <span className="text-slate-400">Auto</span>
          ) : (
            <input
              type="text"
              value={rowData[header] || ""}
              onChange={(e) => handleChange(header, e.target.value)}
              className="w-full outline-none text-[#6B7A90]"
              placeholder={`Enter ${header}`}
            />
          )}
        </td>
      ))}

      <td
        onClick={addRow}
        className="px-4 py-2 border border-slate-300 bg-green-600 cursor-pointer text-center text-white "
      >
        Save
      </td>
    </tr>
  );
};

export default TableInputRow;
