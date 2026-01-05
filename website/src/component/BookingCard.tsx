/* eslint-disable */
// Booking Card Component
import {
  Calendar,
  User,
  Mail,
  Phone,
  CreditCard,
  Bed,
  Users,
  Home,
  DollarSign,
  Moon,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { formatDateTime } from "@/utility/formattedDate";
import { formatMoney } from "@/utility/formatMoney";
const BookingCard = ({ booking }: { booking: any }) => {
  const { date: check_in_date, time: check_in_time } = formatDateTime(
    booking?.check_in_at
  );
  const { date: checkout_date, time: checkout_time } = formatDateTime(
    booking?.checkout_at
  );
  const { date, time } = formatDateTime(booking?.createdAt);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 mb-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {booking?.customer_name}
            </h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>{booking?.customer_email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{booking?.customer_phone}</span>
              </div>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2">
            <div
              className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${
                booking?.payment_status === "PAID"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {booking?.payment_status === "PAID" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <XCircle className="w-4 h-4" />
              )}
              {booking?.payment_status}
            </div>
            <div
              className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${
                booking?.status === "CONFIRMED"
                  ? "bg-blue-100 text-blue-800"
                  : booking?.status === "PENDING"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <Clock className="w-4 h-4" />
              {booking?.status}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Room Details Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-800">
                Room Details
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Bed className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Room Type</p>
                  <p className="font-medium text-gray-800">
                    {booking?.room.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Price per Night</p>
                  <p className="font-medium text-gray-800">
                    ${booking?.room.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Bed className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Beds</p>
                  <p className="font-medium text-gray-800">
                    {booking?.room.bed_count}{" "}
                    {booking?.room.bed_count > 1 ? "Beds" : "Bed"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Max Persons</p>
                  <p className="font-medium text-gray-800">
                    {booking?.room.max_person}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Home className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Floor</p>
                  <p className="font-medium text-gray-800">
                    {booking?.room.floor}th Floor
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-5 h-5 text-cyan-600 flex items-center justify-center">
                  <span className="text-xs font-bold">㎡</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Room Size</p>
                  <p className="font-medium text-gray-800">
                    {booking?.room.room_size} sqft
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-green-600" />
              <h4 className="text-lg font-semibold text-gray-800">
                Booking Details
              </h4>
            </div>

            <div className="space-y-4">
              {/* Check-in / Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Check-in
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {check_in_date}
                  </p>
                  <p className="text-sm text-gray-600">{check_in_time}</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-xl border border-red-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">
                      Check-out
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {checkout_date}
                  </p>
                  <p className="text-sm text-gray-600">{checkout_time}</p>
                </div>
              </div>

              {/* Stay Duration & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Stay Duration
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">
                    {booking?.stay_nights}{" "}
                    <span className="text-sm font-normal">/ nights</span>
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Guests
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-800">
                        {booking?.adult_person_count}
                      </p>
                      <p className="text-xs text-gray-600">Adults</p>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-800">
                        {booking?.children_count}
                      </p>
                      <p className="text-xs text-gray-600">Children</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Pricing Summary
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-800">
                      {formatMoney(booking?.subtotal)}
                    </span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">
                      Total Amount
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      {formatMoney(booking?.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>
              Booked on: {date} at {time}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>Booking ID: {booking?._id.slice(-8)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
