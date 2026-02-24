import React, { useState } from "react";
import { MdOutlineGridOn } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiArrowsClockwiseBold } from "react-icons/pi";

const Header = () => {
  const [isSynced] = useState(false);
  return (
    <header className="bg-white flex items-center justify-between mb-6 px-4 py-4 rounded-lg shadow">
      <div className="flex items-center justify-center gap-4 text-slate-900 cursor-pointer">
        <div className="size-8 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center p-1.5">
          <MdOutlineGridOn size={30} />
        </div>
        <h2 className="text-xl font-extrabold tracking-tight leading-tight">
          Inventory
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-md text-slate-500 rounded-full px-3 py-1 bg-slate-100 transition-colors duration-200 hover:bg-slate-200 font-bold cursor-pointer">
          <GoDotFill size={20} className="text-green-500" />
          Synce Sheet
          {isSynced ? (
            <FaRegCheckCircle size={20} className="text-green-500" />
          ) : (
            <PiArrowsClockwiseBold
              size={20}
              className="text-green-500 animate-spin font-extrabold"
            />
          )}
        </div>
        <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
          <div
            className="size-8 rounded-full overflow-hidden border border-slate-200 bg-slate-100"
            data-alt="User avatar placeholder"
          >
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
