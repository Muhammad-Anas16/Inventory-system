import React from "react";

const TableHeadRow = ({
  headers,
  showInput,
  newHeader,
  setNewHeader,
  addHeader,
}) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <th
          key={index}
          className="px-4 py-2 border border-slate-300 text-[#6B7A90] font-bold uppercase bg-[#F8FAFC] text-center"
        >
          {header}
        </th>
      ))}

      {showInput && (
        <th className="border border-slate-300 text-[#6B7A90] font-bold uppercase bg-[#F8FAFC] text-center">
          <input
            type="text"
            value={newHeader}
            onChange={(e) => setNewHeader(e.target.value)}
            onKeyDown={addHeader}
            autoFocus
            className="w-full h-10 border border-slate-300 text-left text-[#929dac] font-bold uppercase bg-white px-2 outline-none"
          />
        </th>
      )}
    </tr>
  );
};

export default TableHeadRow;
