import React from "react";

function Header() {
  return (
    <div
      className="bg-white p-5 pb-3 pl-10 border-b-[4px]
    border-gray-200 flex items-center justify-between"
    >
      <div className="flex gap-24 items-center">
        <p className="font-bold text-4xl text-blue-500">NaiRideShare</p>
      </div>
    </div>
  );
}

export default Header;
