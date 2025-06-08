"use client";
import React, { useState } from "react";

const RoomBookingTabs = ({ item }) => {
  const [activeTab, setActiveTab] = useState("book");
  const [checkAvailable, setCheckAvailable] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  const handleCheck = () => {
    setCheckAvailable(true);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    e.target.reset();
  };

  return (
    <div className="bg-[#F2F4F4] p-6 rounded-xl">
      <p className="text-2xl font-semibold text-black mb-2">
        ${item?.price}{" "}
        <span className="text-[#4F5E71]  text-base font-normal">
          /night per person
        </span>
      </p>

      <div className="flex border border-[#B1905E] rounded-md overflow-hidden mb-4">
        <button
          className={`w-1/2 py-2 font-medium  cursor-pointer ${
            activeTab === "book" ? "bg-[#B1905E] text-white" : "text-[#B1905E]"
          }`}
          onClick={() => {
            setActiveTab("book");
            setCheckAvailable(false);
          }}
        >
          Book
        </button>
        <button
          className={`w-1/2 py-2 font-medium cursor-pointer ${
            activeTab === "inquiry"
              ? "bg-[#B1905E] text-white cursor-pointer"
              : "text-[#B1905E]"
          }`}
          onClick={() => {
            setActiveTab("inquiry");
            setInquirySent(false);
          }}
        >
          Inquiry
        </button>
      </div>

      {activeTab === "book" && (
        <div>
          <h3 className="text-lg font-bold my-4">Book This Room</h3>
          {!checkAvailable ? (
            <>
              <p className="text-sm mb-4 text-gray-600">
                Please set arrival date and departure date before check
                available.
              </p>
              <input
                type="date"
                placeholder="Arrival Date"
                className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2 mb-4"
              />
              <input
                type="date"
                placeholder="Departure Date"
                className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2 mb-4"
              />
              <button
                onClick={handleCheck}
                className="bg-yellow-400 text-white font-semibold w-full py-2 rounded-full cursor-pointer"
              >
                Check Available
              </button>
            </>
          ) : (
            <div className="flex flex-col justify-between mt-4">
              <div className="mb-10 gap-2 flex">
                <p className="text-[#4F5E71]  line-clamp-1 min-w-[80%] ">
                  * {item?.title}
                </p>
                <input
                  className="w-[20%] border border-gray-400 bg-white px-1"
                  defaultValue={1}
                  type="number"
                />
              </div>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setCheckAvailable(false)}
                  className="bg-white hover:bg-[#B1905E] border border-[#B1905E] text-[#B1905E] hover:text-white px-4 py-2 w-full rounded-full text-lg font-medium cursor-pointer"
                >
                  Previous
                </button>
                <button className="bg-yellow-400 hover:bg-[#B1905E]  text-white px-4 py-2 w-full rounded-full text-lg font-medium cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "inquiry" && (
        <form onSubmit={handleInquirySubmit} className="space-y-3">
          <h3 className="text-xl font-bold my-4">Booking room inquiry</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
          />
          <input
            type="date"
            placeholder="Arrival Date"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
          />
          <input
            type="date"
            placeholder="Departure Date"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
          />
          <input
            type="number"
            placeholder="Number of Adults"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            min="1"
            required
          />
          <input
            type="number"
            placeholder="Number of Children"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            min="0"
          />
          <textarea
            placeholder="Notes"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            rows={3}
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-white font-semibold w-full py-2 rounded-md"
          >
            Submit Inquiry
          </button>

          {inquirySent && (
            <p className="text-green-600 text-center mt-2 font-medium">
              Your inquiry is sent.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default RoomBookingTabs;
