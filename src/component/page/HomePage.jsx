import React from "react";
import { MdOutlineInventory2, MdOutlineUploadFile } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiLock } from "react-icons/ci";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-white p-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md px-6 py-8">
        <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl shadow-sm ring-2 ring-blue-100">
          <MdOutlineInventory2 className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3 text-slate-900">
          InventoryPro
        </h1>
        <p className="text-slate-500 text-center text-lg leading-relaxed max-w-[320px]">
          Your comprehensive offline inventory solution.
        </p>
        <div className="w-full space-y-4 mb-4">
          <button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-base transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 duration-200 flex items-center justify-center gap-3 cursor-pointer">
            <IoMdAddCircleOutline className="text-xl" />
            Create Local Workspace
          </button>
          <button className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-base transition-all shadow-sm shadow-gray-200 hover:shadow-gray-300 duration-200 flex items-center justify-center gap-3 cursor-pointer">
            <MdOutlineUploadFile className="text-xl" />
            Import Existing Data
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-xs text-gray-500">
          <CiLock className="text-[18px] size-5" />
          Your data is stored locally on this device.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
