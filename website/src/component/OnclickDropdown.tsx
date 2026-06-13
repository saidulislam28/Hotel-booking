/* eslint-disable */
"use client";
import { roomOptions } from "@/constants/roomTypes";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const OnclickDropdown = ({
  selectedValue,
  setSelectedValue,
}: {
  selectedValue: string;
  setSelectedValue: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (id: string, name: string) => {
    setSelectedValue(id);
    setOpen(false);
  };
  const selectedOption = roomOptions.find(
    (option) => option.id === selectedValue
  );

  return (
    <div className="relative min-w-36">
      {/* Clickable Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-[#F2F4F4] px-5 py-2 text-[#4F5E71] rounded-lg cursor-pointer w-auto md:w-64"
      >
        {selectedValue && (
          <span>{selectedOption?.name || "Default (All)"}</span>
        )}
        <IoIosArrowDown />
      </div>

      {/* Dropdown Options */}
      {open && (
        <div className="absolute top-full mt-1 bg-white shadow-lg rounded-lg w-full z-10">
          {roomOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id, option.name)}
              className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnclickDropdown;
