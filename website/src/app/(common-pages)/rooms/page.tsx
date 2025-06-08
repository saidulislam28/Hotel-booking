import OnclickDropdown from "@/component/OnclickDropdown";
import RoomSingleCard from "@/component/RoomSingleCard";
import { roomsData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";

const Rooms = () => {
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
            <button className="text-md bg-[#B1905E] px-5 py-2 text-white font-semibold rounded-full hover:cursor-pointer hover:bg-[#ccae81]">
              Filter By
            </button>
            <p className="text-[#4F5E71]">Showing 1 - 12 of 23 results</p>
          </div>
          <OnclickDropdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8">
          {roomsData?.map((item, ind) => (
            <RoomSingleCard key={ind} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
