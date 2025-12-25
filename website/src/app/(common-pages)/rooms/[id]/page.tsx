/* eslint-disable  */
"use client";
import FAQSection from "@/component/Faq";
import OnclickDropdown from "@/component/OnclickDropdown";
import RoomBookingTabs from "@/component/RoomBookingTab";
import SectionTitleMedium from "@/component/SectionTitleMedium";
import BookingPoliciesStepper from "@/component/VerticalStepper";
import { RoomDetailsFaqs } from "@/constants/datas";
import { GetData } from "@/services/api/api";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaCheckDouble, FaStar } from "react-icons/fa";
import { IoBedOutline, IoResizeOutline } from "react-icons/io5";

// {
//     "_id": "693ed77d16d349b66081c7bf",
//     "title": "Test Room",
//     "short_desc": "This is a test room",
//     "description": "<p><span style=\"color: rgb(79, 94, 113);\">Hand-painted murals and oversized industrial windows. Open floor plans and modern appliances. Once a former manufacturing plant, The Heid was designed with high ceilings and concrete flooring. Each space includes a Roku and in-suite laundry, perfect for a weekend or a year-long stay. Start your day with a coffee on the rooftop. Or stroll through The Rail Park, a nature walk set between soaring skyscrapers. The Callowhill neighborhood is a fusion of art galleries, factories, and live music. Stay for a little or stay for a lot, The Heid has what you want.</span></p>",
//     "price": 100,
//     "bed_count": 1,
//     "max_person": 5,
//     "floor": 4,
//     "room_size": 550,
//     "room_services": [
//         {
//             "_id": "690c069a20fff35a254c1960",
//             "title": "High-speed Wifi 1"
//         },
//         {
//             "_id": "690df9a763b11934ccd1fabe",
//             "title": "Non-smoking room"
//         }
//     ],
//     "room_features": [
//         {
//             "_id": "690def5463b11934ccd1fa46",
//             "title": "Complimentary"
//         }
//     ],
//     "room_bathroom_features": [
//         {
//             "_id": "690df7c063b11934ccd1fa77",
//             "title": "Shower"
//         }
//     ],
//     "is_active": true,
//     "sort_order": 1,
//     "is_booked": false,
//     "is_deluxe": true,
//     "is_double": false,
//     "is_featured": true,
//     "is_executive": false,
//     "is_suite": false,
//     "createdAt": "2025-12-14T15:27:57.738Z",
//     "updatedAt": "2025-12-14T15:27:57.738Z",
//     "__v": 0
// }

const RoomCardDetails = ({ params }: any) => {
  const { id } = params;

  const { data: details, isLoading } = useQuery({
    queryKey: ["rooms-single-data", id],
    queryFn: () => GetData(`/web-data/rooms/${id}`),
    staleTime: 0,
    select(data) {
      return data?.data ?? {};
    },
  });

  console.log("params>>", details);

  // const details = roomsData?.find((room) => room.id === Number(id));
  // const facilities = [
  //   { id: 1, title: "High-speed Wifi" },
  //   { id: 2, title: "Non-smoking room" },
  //   { id: 3, title: "On-site parking" },
  //   { id: 4, title: "Superb Breakfast" },
  //   { id: 5, title: "Outdoor swimming pool" },
  //   { id: 6, title: "Fitness center" },
  //   { id: 7, title: "Housekeeping service" },
  //   { id: 8, title: "Restaurant" },
  // ];
  // const bathroom = [
  //   { id: 1, title: "Shower" },
  //   { id: 2, title: "Hair Dryer" },
  //   { id: 3, title: "Robes" },
  //   { id: 4, title: "Slippers" },
  //   { id: 5, title: "Towels" },
  //   { id: 6, title: "Shampoo" },
  // ];
  // const features = [
  //   { id: 1, title: "Complimentary" },
  //   { id: 2, title: "In-room Refrigerator" },
  //   { id: 3, title: "Phones" },
  //   { id: 4, title: "Minibar" },
  //   { id: 5, title: "King Bedroom" },
  //   { id: 6, title: "Balcony" },
  //   { id: 7, title: "USB Outlets" },
  //   { id: 8, title: "Cable/satellite" },
  //   { id: 9, title: "40' Flat Screen HD TV" },
  //   { id: 10, title: "Air Conditioner" },
  //   { id: 11, title: "Balcony" },
  //   { id: 12, title: "Beachfront" },
  // ];
  const Price_plan = [
    { id: 1, title: "Sat", price: details?.price },
    { id: 2, title: "Sun", price: details?.price },
    { id: 3, title: "Mon", price: details?.price },
    { id: 4, title: "Tue", price: details?.price },
    { id: 5, title: "Wed", price: details?.price },
    { id: 6, title: "Thu", price: details?.price },
    { id: 7, title: "Fri", price: details?.price },
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
                  <span className="text-[#4F5E71]">
                    Room Size: {details?.room_size} sqft
                  </span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <IoBedOutline color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">
                    Bed: {details?.bed_count} Beds
                  </span>
                </h4>
                <h4 className="flex items-center gap-2">
                  <CiUser color="#4F5E71" size={18} />
                  <span className="text-[#4F5E71]">
                    Max: {details?.max_person} Adults
                  </span>
                </h4>
              </div>
              {/* Overview  */}
              <div className="p-5 border-2 rounded-xl border-gray-200">
                {/* Overview Details  */}
                <div className="">
                  <SectionTitleMedium title={"Overview"} />
                  {/* <p className="secondary_text mt-6">
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
                  </p> */}
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: details?.description }}
                  />
                </div>
                <div
                  className="my-10"
                  style={{ borderTop: "0.5px solid #cdd1ce" }}
                ></div>
                {/* service and amenities */}
                <div>
                  <SectionTitleMedium title={"Service and Amenities"} />
                  <div className="grid grid-cols-2  gap-y-2 max-w-3xl mt-6">
                    {details?.room_services?.map((item: any) => (
                      <div className="flex items-center gap-5" key={item?._id}>
                        <FaCheckDouble color="lightgreen" />
                        <span className="secondary_text"> {item?.title}</span>
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
                    {details?.room_features?.map((item: any) => (
                      <div className="flex items-center gap-5" key={item?._id}>
                        <FaCheckDouble color="lightgreen" />
                        <span className="secondary_text"> {item?.title}</span>
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
                    {details?.room_bathroom_features?.map((item: any) => (
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

              {/* Pricing plan */}
              <div className="border-2 rounded-xl border-gray-200 p-5">
                <SectionTitleMedium title={"Pricing plan"} />
                <div className="mt-6">
                  <h2 className=" font-semibold text-lg">Regular plan</h2>
                  <div className="flex items-center justify-between gap-10">
                    {Price_plan?.map((plan, index) => (
                      <div
                        key={index}
                        className="mt-5 flex flex-col gap-3 secondary_text"
                      >
                        <h1 className="font-medium text-lg">{plan?.title}</h1>
                        <h5>${details?.price}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Faq*/}
              <div className="border-2 rounded-xl border-gray-200 p-5">
                <SectionTitleMedium title={"Frequently Asked Questions"} />
                <FAQSection faqs={RoomDetailsFaqs} />
              </div>

              {/* Reviews --*/}
              <div className="border-2 rounded-xl border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <SectionTitleMedium title={"Reviews"} />
                  <h4 className="text-2xl font-semibold secondary_text flex items-center gap-4">
                    4.5/5 (2 reviews) <FaStar size={24} color="orange" />
                  </h4>
                </div>
                <div className="mt-10">
                  {/* review filtering  */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <button className="text-md border border-[#B1905E] px-5 py-2 primary_text hover:text-white font-semibold rounded-full cursor-pointer hover:bg-[#ccae81]">
                        All
                      </button>
                      <button className="text-md border border-[#B1905E] px-5 py-2 primary_text hover:text-white font-semibold rounded-full cursor-pointer hover:bg-[#ccae81]">
                        With Photos Only
                      </button>
                    </div>
                    <OnclickDropdown />
                  </div>
                  <div className="mt-12 bg-[#F2F4F4] p-5 space-y-3 rounded-xl">
                    <div className="flex items-center">
                      <FaStar size={20} color="orange" />
                      <FaStar size={20} color="orange" />
                      <FaStar size={20} color="orange" />
                      <FaStar size={20} color="orange" />
                      <FaStar size={20} color="orange" />
                    </div>
                    <h2 className="text-xl font-semibold">Good</h2>
                    <p className="secondary_text">21 june, 2024</p>
                    <p className="secondary_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      In repellat earum similique iure, sequi, deserunt dolorem
                      neque at, laboriosam voluptatum sint? Quam suscipit
                      temporibus omnis deleniti reprehenderit consequatur
                      provident architecto!
                    </p>
                    <div className="flex items-center gap-5">
                      <Image
                        width={150}
                        height={150}
                        src="/banner-min.png"
                        alt="banner"
                        className="object-cover h-full rounded-xl"
                      />
                      <Image
                        width={150}
                        height={150}
                        src="/banner-min.png"
                        alt="banner"
                        className="object-cover h-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <RoomBookingTabs id={"690e323cb23c7ea86bc06c4f"} item={details} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCardDetails;
