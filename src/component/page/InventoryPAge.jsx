import { useEffect, useState } from "react";
import Header from "../reusable/Header";
import TopBar from "../InventoryComponents/topBar";
import TableHeadRow from "../InventoryComponents/TableHeadRow";

// import TableInputRow from "../InventoryComponents/TableInputRow";
import TableDataRow from "../InventoryComponents/TableDataRow";

const InventoryPage = () => {
  const [headers, setHeaders] = useState(() => {
    const savedHeaders = localStorage.getItem("headers");
    return savedHeaders ? JSON.parse(savedHeaders) : ["#", "Name"];
  });
  const [showInput, setShowInput] = useState(false);
  const [newHeader, setNewHeader] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem("rows");
    return savedRows ? JSON.parse(savedRows) : [];
  });

  const addHeader = (e) => {
    if (e.key === "Escape") {
      setShowInput(false);
      setNewHeader("");
      return;
    }
    if (e.key === "Enter" && newHeader.trim() === "") {
      setShowInput(false);
      alert("Header cannot be empty.");
      return;
    }
    if (e.key === "Enter" && newHeader.trim() !== "") {
      setHeaders([...headers, newHeader]);
      setNewHeader("");
      setShowInput(false);
    }
  };

  const handleTopBarKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      // Check if product exists
      const exists = rows.some(
        (row) => row["Name"]?.toLowerCase() === searchTerm.trim().toLowerCase(),
      );

      if (!exists) {
        const newRow = { Name: searchTerm }; // Add new row, only Name for now
        setRows([...rows, newRow]);
      }

      setSearchTerm(""); // Clear input after adding
    }
  };

  // Filtered rows for search
  const filteredRows = rows.filter((row) =>
    headers
      .filter((h) => h !== "#")
      .some((header) =>
        row[header]
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      ),
  );

  useEffect(() => {
    localStorage.setItem("headers", JSON.stringify(headers));
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [headers, rows]);

  return (
    <div>
      <Header />
      <TopBar
        setShowInput={setShowInput}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onEnter={handleTopBarKeyDown}
      />
      <div className="overflow-auto p-4">
        <table className="min-w-full border-collapse">
          <thead>
            <TableHeadRow
              headers={headers}
              showInput={showInput}
              newHeader={newHeader}
              setNewHeader={setNewHeader}
              addHeader={addHeader}
            />
          </thead>

          <tbody>
            {filteredRows.map((row, index) => (
              <TableDataRow
                key={index}
                headers={headers}
                row={row}
                index={index}
                rows={rows}
                setRows={setRows}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;
