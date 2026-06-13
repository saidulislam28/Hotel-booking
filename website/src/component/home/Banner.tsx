import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  return (
    <div
      className="relative h-[500px] md:h-[700px] bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/home_banner.avif')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content goes above the overlay */}

      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
          The Perfect Beachfront Destination
        </h1>
        <p className="text-md md:text-xl text-center mb-8">
          Experience A Refreshing Approach To Your Stay At The Beach Hotel
        </p>

        {/* Search Form */}
        <div className="">
          <button
            onClick={() => router.push("/rooms")}
            className={`text-white hover:text-[#B1905E] bg-[#B1905E] hover:bg-white font-bold hover:cursor-pointer transition-all duration-400 ease-in-out border border-white px-10 py-4 rounded-full`}
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
