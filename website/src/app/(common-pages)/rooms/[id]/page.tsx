import RoomBookingTabs from "@/component/RoomBookingTab";
import SectionTitleMedium from "@/component/SectionTitleMedium";
import BookingPoliciesStepper from "@/component/VerticalStepper";
import VerticalStepper from "@/component/VerticalStepper";
import { roomsData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaCheckDouble, FaStar } from "react-icons/fa";
import { IoBedOutline, IoResizeOutline } from "react-icons/io5";

const RoomCardDetails = ({ params }) => {
  const { id } = params;

  const details = roomsData?.find((room) => room.id === Number(id));
  const facilities = [
    { id: 1, title: "High-speed Wifi" },
    { id: 2, title: "Non-smoking room" },
    { id: 3, title: "On-site parking" },
    { id: 4, title: "Superb Breakfast" },
    { id: 5, title: "Outdoor swimming pool" },
    { id: 6, title: "Fitness center" },
    { id: 7, title: "Housekeeping service" },
    { id: 8, title: "Restaurant" },
  ];
  const bathroom = [
    { id: 1, title: "Shower" },
    { id: 2, title: "Hair Dryer" },
    { id: 3, title: "Robes" },
    { id: 4, title: "Slippers" },
    { id: 5, title: "Towels" },
    { id: 6, title: "Shampoo" },
  ];
  const features = [
    { id: 1, title: "Complimentary" },
    { id: 2, title: "In-room Refrigerator" },
    { id: 3, title: "Phones" },
    { id: 4, title: "Minibar" },
    { id: 5, title: "King Bedroom" },
    { id: 6, title: "Balcony" },
    { id: 7, title: "USB Outlets" },
    { id: 8, title: "Cable/satellite" },
    { id: 9, title: "40' Flat Screen HD TV" },
    { id: 10, title: "Air Conditioner" },
    { id: 11, title: "Balcony" },
    { id: 12, title: "Beachfront" },
  ];
  return (
    <>
      <TitleHelmet title={details?.title ?? "Room Details"} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Rooms", href: "/rooms" },
          { title: details?.title ?? "Room Details" },
        ]}
        title={details?.title}
      />
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="flex items-start gap-8">
          <div className="w-[70%]">
            <Image
              width={840}
              height={475}
              src={details?.image ?? "/banner-min.png"}
              alt={details?.title ?? "image not found"}
              className="h-[475px] w-full object-cover cursor-pointer rounded-xl"
            />
            {/* details  */}
            <div className="space-y-5 mt-5 flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="flex items-center gap-2">
                  <FaStar color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">4.5/5 (2 reviews)</span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <IoResizeOutline color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">Room Size: 50sqm</span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <IoBedOutline color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">Bed: 1 Beds</span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <CiUser color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">Max: 6 Adults</span>
                </h4>
              </div>
              {/* Overview  */}
              <div className="p-5 border-2 rounded-xl border-gray-200">
                {/* Overview Details  */}
                <div className="">
                  <SectionTitleMedium title={"Overview"} />
                  <p className="secondary_text mt-6">
                    Hand-painted murals and oversized industrial windows. Open
                    floor plans and modern appliances. Once a former
                    manufacturing plant, The Heid was designed with high
                    ceilings and concrete flooring. Each space includes a Roku
                    and in-suite laundry, perfect for a weekend or a year-long
                    stay. Start your day with a coffee on the rooftop. Or stroll
                    through The Rail Park, a nature walk set between soaring
                    skyscrapers. The Callowhill neighborhood is a fusion of art
                    galleries, factories, and live music. Stay for a little or
                    stay for a lot, The Heid has what you want.
                  </p>
                </div>
                <div
                  className="my-10"
                  style={{ borderTop: "0.5px solid #cdd1ce" }}
                ></div>
                {/* service and amenities */}
                <div>
                  <SectionTitleMedium title={"Service and Amenities"} />
                  <div className="grid grid-cols-2  gap-y-2 max-w-3xl mt-6">
                    {facilities.map((item) => (
                      <div className="flex items-center gap-5" key={item.id}>
                        <FaCheckDouble color="lightgreen" />
                        <span className="secondary_text"> {item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="my-10"
                  style={{ borderTop: "0.5px solid #cdd1ce" }}
                ></div>
                {/* Room Features */}
                <div>
                  <SectionTitleMedium title={"Room Features"} />
                  <div className="grid grid-cols-2  gap-y-2 max-w-3xl mt-6">
                    {features.map((item) => (
                      <div className="flex items-center gap-5" key={item.id}>
                        <FaCheckDouble color="lightgreen" />
                        <span className="secondary_text"> {item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="my-10"
                  style={{ borderTop: "0.5px solid #cdd1ce" }}
                ></div>
                {/* Bathroom */}
                <div>
                  <SectionTitleMedium title={"Bathroom"} />
                  <div className="grid grid-cols-2  gap-y-2 max-w-3xl mt-6">
                    {bathroom.map((item) => (
                      <div className="flex items-center gap-5" key={item.id}>
                        <FaCheckDouble color="lightgreen" />
                        <span className="secondary_text"> {item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* stepper  */}
              <div className="border-2 rounded-xl border-gray-200 p-5">
                <BookingPoliciesStepper />
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <RoomBookingTabs item={details} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCardDetails;
