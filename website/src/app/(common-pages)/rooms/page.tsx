"use client";
import OnclickDropdown from "@/component/OnclickDropdown";
import RoomSingleCard from "@/component/RoomSingleCard";
import { GetData } from "@/services/api/api";
import { GET_ROOM_LIST } from "@/services/api/endpoints";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [selectedValue, setSelectedValue] = useState("Default (All)");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["rooms-data"],
    queryFn: () => GetData(`${GET_ROOM_LIST}?type=${selectedValue}`),
    staleTime: 0,
    select(data) {
      console.log("data from another mother>", data);
      return data?.data ?? [];
    },
  });

  useEffect(() => {
    refetch();
  }, [selectedValue]);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  return (
    <>
      <TitleHelmet title="Rooms" />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Rooms", href: "/rooms" },
        ]}
        title="Room"
      />
      <div className="max-w-7xl mx-auto p-4">
        {/* filtering section  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p className="text-[#4F5E71]">
              Showing {data?.filtered_room} of {data?.total_room} results
            </p>
          </div>
          <OnclickDropdown
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8">
          {/* {roomsData?.map((item, ind) => ( */}
          {data?.room?.map((item, ind) => (
            <RoomSingleCard key={ind} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
