import httpStatus from "http-status-codes";
import AppError from "../../../helpers/CustomError";
import { getTransactionId } from "../../../utils/transactionId";
import { BOOKING_STATUS, IBooking } from "../../interfaces/booking";
import { Booking, Payment, Room, User } from "../../model";
import { PAYMENT_STATUS } from "../payment/payment.interface";

const createBooking = async (payload: Partial<IBooking>) => {
  const uniqueTranId = getTransactionId();

  const session = await Booking.startSession();
  session.startTransaction();

  try {
    let user: any = await User.findOne({
      email: payload.customer_email,
    });
    if (!user) {
      user = await User.create(
        [
          {
            name: payload.customer_name,
            email: payload.customer_email,
            phone: payload.customer_phone,
          },
        ],
        { session }
      );
    }
    const room = await Room.findById(payload.room);
    if (!room) {
      throw new AppError(httpStatus.NOT_FOUND, "Room not found!!!!!!!");
    }
    const amount = 
      Number(room?.price) *
      Number(
        (payload?.adult_person_count ?? 0) + (payload?.children_count ?? 0)
      );
    const totalAmount = (amount ?? 0) * (payload?.stay_nights ?? 0);

    const booking = await Booking.create(
      [
        {
          user: user?._id,
          status: BOOKING_STATUS.PENDING,
          payment_status: PAYMENT_STATUS.UNPAID,
          total: totalAmount,
          subtotal: totalAmount,
          ...payload,
        },
      ],
      { session }
    );

    const payment = await Payment.create(
      [
        {
          booking: booking[0]._id,
          status: PAYMENT_STATUS.UNPAID,
          transactionId: uniqueTranId,
          amount: totalAmount,
        },
      ],
      { session }
    );
    // TODO: in return value user id not sending
    const updatedBooking = (await Booking.findByIdAndUpdate(
      booking[0]._id,
      {
        payment: payment[0]._id,
      },
      {
        new: true,
        runValidators: true,
        session,
      }
    )
      .populate("user", "name email")
      .populate("room", "title price")) as any;

    // const sslPayload: IsslCommerz = {
    //   address: updatedBooking?.user.address,
    //   name: updatedBooking?.user.name,
    //   amount,
    //   email: updatedBooking?.user.email,
    //   phoneNumber: updatedBooking?.user?.phone,
    //   transaction: payment[0]?.transactionId,
    // };

    // console.log("ssl payload", sslPayload)

    // const sslPayment = await sslService.sslPaymentInit(sslPayload);

    // console.log("payment", sslPayment);

    await session.commitTransaction();
    session.endSession();
    return {
      booking: updatedBooking,
      // payment_url: sslPayment?.GatewayPageURL,
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log("error", error);
    throw Error;
  }
};
// const createBooking = async (payload: Partial<IBooking>, userId: string) => {
//   const uniqueTranId = getTransactionId();

//   const session = await Booking.startSession();
//   session.startTransaction();

//   try {
//     const user = await User.findById(userId);
//     if (!user?.phone || !user?.address) {
//       throw new AppError(
//         httpStatus.BAD_REQUEST,
//         "Please update your profile to book a tour"
//       );
//     }
//     const booking = await Booking.create(
//       [
//         {
//           user: userId,
//           status: BOOKING_STATUS.PENDING,
//           ...payload,
//         },
//       ],
//       { session }
//     );
//     const tour = await Tour.findById(payload._id).select("costFrom");
//     const amount = Number(tour?.costFrom) * Number(payload?.adult_person_count);
//     const payment = await Payment.create(
//       [
//         {
//           booking: booking[0]._id,
//           status: PAYMENT_STATUS.UNPAID,
//           transactionId: uniqueTranId,
//           amount,
//         },
//       ],
//       { session }
//     );

//     // console.log("payment creation", payment)

//     const updatedBooking = (await Booking.findByIdAndUpdate(
//       booking[0]._id,
//       {
//         payment: payment[0]._id,
//       },
//       {
//         new: true,
//         runValidators: true,
//         session,
//       }
//     )
//       .populate("user", "name email phone address")
//       .populate("tour", "title costFrom")
//       .populate("payment")) as any;

//     const sslPayload: IsslCommerz = {
//       address: updatedBooking?.user.address,
//       name: updatedBooking?.user.name,
//       amount,
//       email: updatedBooking?.user.email,
//       phoneNumber: updatedBooking?.user?.phone,
//       transaction: payment[0]?.transactionId,
//     };

//     // console.log("ssl payload", sslPayload)

//     const sslPayment = await sslService.sslPaymentInit(sslPayload);

//     // console.log("payment", sslPayment);

//     await session.commitTransaction();
//     session.endSession();
//     return {
//       booking: updatedBooking,
//       payment_url: sslPayment?.GatewayPageURL,
//     };
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     console.log("error", error);
//     throw Error;
//   }
// };

const getUserBooking = async (userId: string) => {
  try {
    const bookings = await Booking.find({ user: userId }).populate("tour");

    return bookings;
  } catch (error: any) {
    console.log(error);
    throw new AppError(
      401,
      error.message ||
        error?.response?.data ||
        "Something went wrong when getting user bookings"
    );
  }
};
const getBookingById = async (bookingId: string) => {
  try {
    const singleBooking = await Booking.findById(bookingId)
      .populate("user", "name email phone address")
      .populate("tour");

    return singleBooking;
  } catch (error: any) {
    console.log(error);
    throw new AppError(
      401,
      error.message ||
        error?.response?.data ||
        "Something went wrong when getting user bookings"
    );
  }
};
const updateBookingStatus = async (bookingId: string, status: any) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(bookingId, status, {
      new: true,
      runValidators: true,
    });

    return updateBooking;
  } catch (error: any) {
    console.log(error);
    throw new AppError(
      401,
      error.message ||
        error?.response?.data ||
        "Something went wrong when getting user bookings"
    );
  }
};
const getAllBookings = async () => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email phone address")
      .populate("tour");

    return bookings;
  } catch (error: any) {
    console.log(error);
    throw new AppError(
      401,
      error.message ||
        error?.response?.data ||
        "Something went wrong when getting user bookings"
    );
  }
};

export const BookingService = {
  createBooking,
  getUserBooking,
  getBookingById,
  updateBookingStatus,
  getAllBookings,
};
