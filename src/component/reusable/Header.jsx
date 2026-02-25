import React, { useState } from "react";
import { MdOutlineGridOn } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const Header = () => {
  const [isSynced] = useState(false);

  return (
    <header className="bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-4 py-4 rounded-lg shadow w-full">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="size-8 sm:size-9 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center p-1.5">
          <MdOutlineGridOn size={22} />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight leading-tight">
          Inventory
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 rounded-full px-3 py-1 bg-slate-100 hover:bg-slate-200 transition-colors duration-200 font-semibold cursor-pointer whitespace-nowrap">
          <GoDotFill size={14} className="text-green-500" />
          <span className="xs:inline">Sync Sheet</span>

          {isSynced ? (
            <FaRegCheckCircle size={16} className="text-green-500" />
          ) : (
            <PiArrowsClockwiseBold
              size={16}
              className="text-green-500 animate-spin"
            />
          )}
        </div>

        {/* Avatar */}
        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
          <div className="size-8 sm:size-9 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnUPeTNzlS_CUryNWXSZ-9NFRNGaQPkGHKpBkYNNyDjboe056HB1sUYNJbtavKH8DhCusN7yhFH1JnZVrUEjjWgjkxgWjhkNs_roLtfuqMatWGTaHwq52z1EhtShlQTgJgQGPZmEvuOePADNq-U5HvVAqj-0F_hrF0ROPV6YFW6j56a2modpOhGzYIQx2cAhRmjgLXfRrNhYQbf9OQASzwfH6l7HoRPeteYy9izXxncw1v5gGHS3VuQ1Z_sjKYE-sDIiwASw5eGQ"
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
