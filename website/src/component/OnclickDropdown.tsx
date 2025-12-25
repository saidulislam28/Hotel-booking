"use client"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const OnclickDropdown = () => {
  const [open, setOpen] = useState(false);

  // Optional: close dropdown when clicked outside
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      <p
        onClick={handleToggle}
        className="flex items-center gap-5 bg-[#F2F4F4] px-5 py-2 text-[#4F5E71] rounded-lg cursor-pointer select-none"
      >
        Default (Random)
        <IoIosArrowDown />
      </p>

      {open && (
        <div className="absolute z-50 mt-1 shadow-lg rounded-lg min-w-50 bg-[#F2F4F4]">
          <p className="block px-6 py-4 rounded-lg font-semibold text-[#4F5E71] hover:text-[#B1905E] cursor-pointer">
            hello
          </p>
        </div>
      )}
    </div>
  );
};

export default OnclickDropdown;
