/* eslint-disable  */
"use client";
import EventCard from "@/component/EventCard";
import { GetData } from "@/services/api/api";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { IoRefreshOutline, IoSearch } from "react-icons/io5";
const title = "Blog";
const Blog = () => {
  const categories = ["Design", "Event", "Gallery", "Hotel", "Uncategorized"];
  const tags = [
    "Air Taxi",
    "Beach Hotel",
    "Hotel",
    "Party",
    "Summer View",
    "Swimming",
  ];

  const [blogQuery, setBlogQuery] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [selectTag, setSelectTags] = useState<string | null>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["website-data-blogs"],
    queryFn: () =>
      GetData(
        `${"/web-data/blogs"}?tags=${blogQuery}&searchText=${searchText}&page=${page}&limit=${5}`
      ),
    staleTime: 0,
    select(data) {
      return data?.data ?? [];
    },
  });

  console.log("blog data", data);

  const { data: blogTags } = useQuery({
    queryKey: ["rooms-data-tags"],
    queryFn: () => GetData(`/web-data/tags`),
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
  }, [blogQuery, searchText, page]);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  const handleClearFilter = () => {
    setBlogQuery("");
    setSelectTags(null);
  };
  const handleClickTags = (id: string) => {
    setBlogQuery(id);
    setSelectTags(id);
  };
  const handleSearchTextChange = (value: any) => {
    console.log("searchText", value?.target?.value);

    setSearchText(value?.target?.value);
  };

  return (
    <>
      <TitleHelmet title="Blog" />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5 flex items-start gap-5">
        <div className="w-[70%] grid grid-cols-2 gap-5">
          {data?.blog?.map((item: any, index: number) => (
            <EventCard key={index} item={item} />
          ))}
        </div>
        <div className="w-[30%]">
          <div className="relative mb-8">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter keyword"
              onChange={(value) => handleSearchTextChange(value)}
              className="w-full pl-10 pr-4 py-3 bg-[#F2F4F4] rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Categories Section */}
          {/* <div className="mb-8 border-2 border-gray-200 rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 cursor-pointer bg-white hover:bg-[#B1905E] border border-gray-200 rounded-full text-[#4F5E71] hover:text-white text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div> */}

          {/* Tags Section */}
          <div className="border-2 border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between  mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Tags</h2>
              <button
                onClick={handleClearFilter}
                className={`px-4 py-1 flex items-center gap-2 rounded-sm  text-sm  transition-colors cursor-pointer bg-[#B1905E] text-white`}
              >
                All
                <IoRefreshOutline size={14} className="font-bold" />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {blogTags?.map((tag: any, index: number) => (
                <button
                  key={index}
                  className={`px-4 py-2  rounded-lg  text-sm  transition-colors cursor-pointer ${
                    selectTag === tag?._id
                      ? "bg-[#B1905E] text-white"
                      : "text-[#4F5E71] bg-gray-100"
                  }`}
                  onClick={() => handleClickTags(tag?._id)}
                >
                  {tag?.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          className={` rounded-md text-white cursor-pointer ${
            page === 1 ? "bg-gray-400" : "bg-[#B1905E] border border-[#B1905E]"
          }  p-2 mx-1`}
          disabled={page === 1}
        >
          Prev
        </button>

        {pageArray?.map((data: any, ind) => (
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
    </>
  );
};

export default Blog;
