/* eslint-disable  */
"use client";
import { Post } from "@/services/api/api";
import { ROOM_BOOKING } from "@/services/api/endpoints";
import { countNights } from "@/utility/countNights";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoomBookingTabs = ({ id, item }: any) => {
  const [activeTab, setActiveTab] = useState("Book");
  const [checkAvailable, setCheckAvailable] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [idModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleCheck = () => {
    setCheckAvailable(true);
  };

  const createBookingMutation = useMutation({
    mutationFn: async (data: any) => Post(ROOM_BOOKING, data),
    onSuccess: () => {
      setInquirySent(true);
      reset();
      toast.success("Booking Created Successfully!!!");
    },
    onError: (error: any) => {
      console.log("error:", error);
      toast.error(error?.response?.data?.message ?? "Failed");
    },
  });

  const onSubmitForm = (data: any) => {
    setFormData(data);
    setIsModalVisible(true);
  };

  const handleConfirmBooking = () => {
    if (formData) {
      createBookingMutation.mutate({
        ...formData,
        total: totalAmount,
        subtotal: totalAmount,
        room: "693ed77d16d349b66081c7bf",
      });
      setIsModalVisible(false);
    }
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  const roomPricePerNight = 150; // 🔒 static price

  const nights: number = countNights(
    formData?.check_in_at,
    formData?.checkout_at
  );

  const totalAmount = nights * roomPricePerNight;

  return (
    <div className="bg-[#F2F4F4] p-6 rounded-xl">
      <p className="text-2xl font-semibold text-black mb-2">
        ${item?.price}{" "}
        <span className="text-[#4F5E71]  text-base font-normal">per night</span>
      </p>

      <div className="flex border border-[#B1905E] rounded-md overflow-hidden mb-4">
        <button
          type="button"
          className={`w-1/2 py-2 font-medium  cursor-pointer ${
            activeTab === "Check Availability"
              ? "bg-[#B1905E] text-white"
              : "text-[#B1905E]"
          }`}
          onClick={() => {
            setActiveTab("Check Availability");
            setCheckAvailable(false);
          }}
        >
          Check Availability
        </button>
        <button
          type="button"
          className={`w-1/2 py-2 font-medium cursor-pointer ${
            activeTab === "Book"
              ? "bg-[#B1905E] text-white cursor-pointer"
              : "text-[#B1905E]"
          }`}
          onClick={() => {
            setActiveTab("Book");
            setInquirySent(false);
          }}
        >
          Book
        </button>
      </div>

      {activeTab === "Check Availability" && (
        <div>
          <h3 className="text-lg font-bold my-4">Booking Room Inquiry</h3>
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
                type="button"
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
                  type="button"
                  onClick={() => setCheckAvailable(false)}
                  className="bg-white hover:bg-[#B1905E] border border-[#B1905E] text-[#B1905E] hover:text-white px-4 py-2 w-full rounded-full text-lg font-medium cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="bg-yellow-400 hover:bg-[#B1905E]  text-white px-4 py-2 w-full rounded-full text-lg font-medium cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "Book" && (
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-3">
          <h3 className="text-xl font-bold my-4">Booking room</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
            {...register("customer_name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
            {...register("customer_email")}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
            {...register("customer_phone")}
          />
          <input
            type="datetime-local"
            placeholder="Arrival Date"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
            {...register("check_in_at")}
          />
          <input
            type="datetime-local"
            placeholder="Departure Date"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            required
            {...register("checkout_at")}
          />
          <input
            type="number"
            placeholder="Number of Adults"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            min={1}
            required
            {...register("adult_person_count")}
          />
          <input
            type="number"
            placeholder="Number of Children"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            min={0}
            {...register("children_count")}
          />
          <textarea
            placeholder="Notes"
            className="w-full bg-white text-[#4F5E71] rounded-md px-3 py-2"
            rows={3}
            {...register("notes")}
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-white font-semibold w-full py-2 rounded-md hover:cursor-pointer"
          >
            Submit
          </button>

          {inquirySent && (
            <p className="text-green-600 text-center mt-2 font-medium">
              Your inquiry is sent.
            </p>
          )}
        </form>
      )}

      {idModalVisible && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            <p className="text-3xl font-semibold mb-6">Booking Summary</p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Customer Name</span>
                <span className="font-medium">{formData?.customer_name}</span>
              </div>

              <div className="flex justify-between">
                <span>Email</span>
                <span className="font-medium">{formData?.customer_email}</span>
              </div>

              <div className="flex justify-between">
                <span>Phone</span>
                <span className="font-medium">{formData?.customer_phone}</span>
              </div>

              <div className="flex justify-between">
                <span>Adults</span>
                <span className="font-medium">
                  {formData?.adult_person_count}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Children</span>
                <span className="font-medium">{formData?.children_count}</span>
              </div>

              <div className="flex justify-between">
                <span>Check In</span>
                <span className="font-medium">
                  {formData?.check_in_at
                    ? new Date(formData.check_in_at).toLocaleString()
                    : "-"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Check Out</span>
                <span className="font-medium">
                  {formData?.checkout_at
                    ? new Date(formData.checkout_at).toLocaleString()
                    : "-"}
                </span>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between">
                <span>Nights</span>
                <span className="font-semibold">{nights}</span>
              </div>

              <div className="flex justify-between">
                <span>Price / Night</span>
                <span className="font-semibold">${roomPricePerNight}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalAmount}</span>
              </div>

              {formData?.notes && (
                <div className="pt-2">
                  <p className="text-gray-500 text-xs">Notes</p>
                  <p className="text-sm">{formData.notes}</p>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomBookingTabs;
