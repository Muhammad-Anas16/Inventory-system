import { useEffect, useState } from "react";
import Header from "../reusable/Header";
import TopBar from "../InventoryComponents/topBar";

const InventoryPAge = () => {
  const [headers, setHeaders] = useState(() => {
    const savedHeaders = localStorage.getItem("headers");
    return savedHeaders ? JSON.parse(savedHeaders) : ["#", "Name"];
  });
  const [showInput, setShowInput] = useState(false);
  const [newHeader, setNewHeader] = useState("");

  const addHeader = (e) => {
    if (e.key === "Enter" && newHeader.trim() !== "") {
      setHeaders([...headers, newHeader]);
      setNewHeader("");
      setShowInput(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("headers", JSON.stringify(headers));
  }, [headers]);

  return (
    <div>
      <Header />
      <TopBar />
      inventory
      {/* <button onClick={addHeader}>Add Header</button> */}
      <table>
        <thead>
          <tr className="">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-slate-300 text-left text-[#6B7A90] font-bold uppercase bg-[#F8FAFC]"
              >
                {header}
              </th>
            ))}
            <th
              onClick={() => setShowInput(true)}
              className={`${!showInput ? "px-4 py-2" : ""} border border-slate-300 text-left text-[#6B7A90] font-bold uppercase bg-[#F8FAFC]`}
              style={{ cursor: "pointer", background: "#eee" }}
            >
              {showInput ? (
                <input
                  type="text"
                  value={newHeader}
                  onChange={(e) => setNewHeader(e.target.value)}
                  onKeyDown={addHeader}
                  autoFocus
                  className="w-28 h-10 border border-slate-300 text-left text-[#929dac] font-bold uppercase bg-white px-2 outline-none"
                />
              ) : (
                "Add Field"
              )}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default InventoryPAge;
