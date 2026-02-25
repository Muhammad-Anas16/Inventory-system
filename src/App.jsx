import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./component/page/HomePage";
import InventoryPage from "./component/page/InventoryPAge";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </>
  );
}

export default App;
