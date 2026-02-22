import React from "react";
import { MdOutlineInventory2 } from "react-icons/md";

const HomePage = () => {
  return (
    <div>
      <div>
        <MdOutlineInventory2 />
      </div>
      <h1>InventoryPro</h1>
      <p>Your comprehensive offline inventory solution.</p>
      <div>
        <button> Create Local Workspace</button>
        <button>Import Existing Data</button>
      </div>
      <div>Your data is stored locally on this device.</div>
    </div>
  );
};

export default HomePage;
