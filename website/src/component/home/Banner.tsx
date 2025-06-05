import { IoSearch } from "react-icons/io5";

export default function Banner() {
  return (
    <div
      className="relative h-[700px] bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/banner-min.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content goes above the overlay */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          The Perfect Beachfront Destination
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Experience A Refreshing Approach To Your Stay At The Beach Hotel
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-wrap md:flex-nowrap items-center px-4 py-5 w-full max-w-5xl text-gray-700">
          {/* Date Range */}
          <div className="flex items-center space-x-6 border-r pr-4 w-full md:w-auto mb-2 md:mb-0">
            <span className="text-gray-500 text-3xl">📅</span>
            <div className="text-xs">
              <div className="font-medium text-lg">Check in - Checkout</div>
              <div className="text-gray-500 text-lg">
                2025/06/05 – 2025/06/06
              </div>
            </div>
          </div>
          {/* Search Button */}
          <button className="group ml-auto bg-white hover:bg-[#B1905E] text-white p-2  rounded-full flex items-center gap-5 transition-all duration-500 ease-in-out">
            <span className="transition-all duration-500 ease-in-out">
              Search
            </span>
            <span className="bg-[#B1905E] text-white  p-2 hover:p-0 rounded-full transition-all duration-500 ease-in-out">
              <IoSearch size={22} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
