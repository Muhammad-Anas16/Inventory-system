import React from "react";

const TableDataRow = ({ headers, row, index }) => {
  return (
    <tr className="hover:bg-slate-50 transition">
      {headers.map((header, i) => (
        <td
          key={i}
          className="px-4 py-2 border border-slate-300 text-[#334155]"
        >
          {header === "#" ? index + 1 : row[header]}
        </td>
      ))}
    </tr>
  );
};

export default TableDataRow;

// import { useState } from "react";

// const TableDataRow = ({ headers, row, index, rows, setRows }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState(row);

//   const handleChange = (header, value) => {
//     setEditData((prev) => ({
//       ...prev,
//       [header]: value,
//     }));
//   };

//   const handleDelete = () => {
//     // Get current rows from localStorage
//     const storedRows = JSON.parse(localStorage.getItem("rows")) || [];
//     // Filter out the row with the same Name
//     const filteredRows = storedRows.filter((r) => r.Name !== row.Name);
//     // Update state and localStorage
//     setRows(filteredRows);
//     localStorage.setItem("rows", JSON.stringify(filteredRows));
//   };

//   const handleUpdate = () => {
//     const updatedRows = [...rows];
//     updatedRows[index] = editData;
//     setRows(updatedRows);
//     setIsEditing(false);
//   };

//   return (
//     <tr className="hover:bg-slate-50 transition">
//       {headers.map((header, i) => (
//         <td key={i} className="px-4 py-2 border border-slate-300 text-center">
//           {header === "#" ? (
//             index + 1
//           ) : isEditing ? (
//             <input
//               type="text"
//               value={editData[header] || ""}
//               onChange={(e) => handleChange(header, e.target.value)}
//               className="w-full outline-none text-[#6B7A90]"
//             />
//           ) : (
//             row[header]
//           )}
//         </td>
//       ))}

//       <td
//         className={`px-4 py-2 border border-slate-300 text-center cursor-pointer text-white ${
//           isEditing ? "bg-blue-600" : "bg-yellow-500"
//         }`}
//         onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
//       >
//         {isEditing ? "Update" : "Edit"}
//       </td>

//       <td
//         className="px-4 py-2 border border-slate-300 text-center cursor-pointer text-white bg-red-600"
//         onClick={handleDelete}
//       >
//         Delete
//       </td>

//       <td className="px-4 py-2 border border-slate-300 text-center space-x-2 flex items-center justify">
//         <button
//           onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
//           className={`px-3 py-1 text-white rounded ${
//             isEditing ? "bg-blue-600" : "bg-yellow-500"
//           }`}
//         >
//           {isEditing ? "Update" : "Edit"}
//         </button>

//         <button
//           onClick={handleDelete}
//           className="px-3 py-1 bg-red-600 text-white rounded"
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TableDataRow;
