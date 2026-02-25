import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between w-full mb-6 px-4 gap-4">
      {/* Search Section */}
      <div className="flex items-center gap-2 border border-slate-300 rounded-md px-3 py-2 w-full md:max-w-xs focus-within:ring-2 focus-within:ring-blue-500 transition">
        <FaSearch size={18} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto">
        <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition border border-slate-200 w-full sm:w-auto">
          <FiDownload size={18} className="text-slate-500" />
          <span>Download Sheet</span>
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition active:scale-95 w-full sm:w-auto">
          <FaPlus size={18} />
          <span>New</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
