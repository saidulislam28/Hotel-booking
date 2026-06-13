/* eslint-disable  */
"use client";
import OnclickDropdown from "@/component/OnclickDropdown";
import RoomSingleCard from "@/component/RoomSingleCard";
import { GetData } from "@/services/api/api";
import { GET_ROOM_LIST } from "@/services/api/endpoints";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Rooms = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Default (All)");
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["rooms-data"],
    queryFn: () =>
      GetData(
        `${GET_ROOM_LIST}?type=${selectedValue}&page=${page}&limit=${6}&searchText=${searchText}`,
      ),
    staleTime: 0,
    select(data) {
      return data?.data ?? [];
    },
  });

  const pageLength = data?.totalPages || 1;

  const pageArray = useMemo(() => {
    const total = pageLength;
    const current = page;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    pages.push(1);

    if (current > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    ) {
      pages.push(i);
    }

    if (current < total - 2) {
      pages.push("...");
    }

    pages.push(total);

    return pages;
  }, [page, pageLength]);

  useEffect(() => {
    refetch();
  }, [selectedValue, searchText, page]);

  const handleSearchTextChange = (value: any) => {
    setSearchText(value?.target?.value);
    setPage(1);
  };

  const handleTypeChange = (value: string) => {
    setSelectedValue(value);
    setPage(1);
  };

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
        <div className="flex items-center justify-between gap-2 md:gap-10">
          <div className=" hidden md:flex items-center gap-5 min-w-40">
            <p className="text-[#4F5E71] ">
              Showing {data?.filtered_room} of {data?.total_room} results
            </p>
          </div>
          <div className="flex items-center gap-5 w-full">
            <div className="relative w-full">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter keyword"
                onChange={(value) => handleSearchTextChange(value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F2F4F4] rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <OnclickDropdown
            selectedValue={selectedValue}
            setSelectedValue={handleTypeChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8">
          {/* {roomsData?.map((item, ind) => ( */}
          {data?.room?.map((item: any, ind: number) => (
            <RoomSingleCard key={ind} item={item} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            className={` rounded-md text-white cursor-pointer ${
              page === 1
                ? "bg-gray-400"
                : "bg-[#B1905E] border border-[#B1905E]"
            }  p-2 mx-1`}
            disabled={page === 1}
          >
            Prev
          </button>

          {pageArray?.map((data, ind) => (
            <button
              onClick={() => {
                setPage(data);
              }}
              key={ind}
              className={`border border-[#B1905E] rounded-md  cursor-pointer hover:bg-[#B1905E] p-2 mx-1 ${
                data == page ? "bg-[#B1905E] text-white" : "bg-white text-black"
              }`}
            >
              {data}
            </button>
          ))}
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className={` rounded-md text-white cursor-pointer ${
              page === data?.totalPages
                ? "bg-gray-400"
                : "bg-[#B1905E] border border-[#B1905E]"
            }  p-2 mx-1`}
            disabled={page === data?.totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Rooms;
