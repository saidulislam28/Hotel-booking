import React from "react";

const Test = () => {
  return (
    <div className="relative group inline-block text-left">
  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
    Menu
  </button>

  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg w-40 z-50">
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
  </div>
</div>
  );
};

export default Test;
