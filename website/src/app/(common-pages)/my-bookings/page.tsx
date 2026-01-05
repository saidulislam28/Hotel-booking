"use client";
import { GetData } from "@/services/api/api";
import { MY_BOOKINGS } from "@/services/api/endpoints";
/* eslint-disable */
import BookingCard from "@/component/BookingCard";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import {
    Calendar,
    XCircle
} from "lucide-react";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const title = "My Bookings";

const Page = () => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["User-bookings"],
    queryFn: () => GetData(MY_BOOKINGS),
    select(data) {
      return data?.data;
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return (
      <>
        <TitleHelmet title={title} />
        <PageTitle
          breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
          title={title}
        />
        <div className="max-w-7xl mx-auto p-5">Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <TitleHelmet title={title} />
        <PageTitle
          breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
          title={title}
        />
        <div className="max-w-7xl mx-auto p-5">
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-8 rounded-2xl text-center">
            <XCircle className="w-16 h-16 mx-auto mb-4 text-red-400" />
            <h3 className="text-xl font-bold mb-2">Error Loading Bookings</h3>
            <p>Unable to fetch your booking history. Please try again later.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        {data?.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Bookings Found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              You haven't made any bookings yet. Start exploring our rooms to
              book your stay!
            </p>
          </div>
        ) : (
          data?.map((booking: any) => (
            <BookingCard key={booking._id} booking={booking} />
          ))
        )}
      </div>
    </>
  );
};

export default Page;
