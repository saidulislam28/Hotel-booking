"use client"
import Routes from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-20 bg-white relative z-50 shadow-md">
      <div className="max-w-[1310px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image
              width={10}
              height={10}
              className="h-10 w-10"
              src="/globe.svg"
              alt="Image"
              prefix="blur"
            />
          </Link>
          <Link href={"/"}>
            <h2 className="font-bold text-2xl">Saidul</h2>
          </Link>
        </div>

        <div className="flex flex-row items-center gap-7">
          {Routes?.map((route) => {
            const isActive = pathname === route.path;
            return (
              <div key={route.title} className="relative group">
                <Link
                  href={route.path}
                  className={`px-4 py-2 font-semibold flex items-center gap-2 ${
                    isActive
                      ? "text-[#B1905E]"
                      : "text-black hover:text-[#B1905E]"
                  }`}
                >
                  {route.title}
                  {route.icon ? <IoIosArrowDown /> : ""}
                </Link>

                {/* Dropdown */}
                {route?.children?.length > 0 && (
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg min-w-64">
                    {route?.children?.map((child) => {
                      const isChildActive = pathname === child.path;
                      return (
                        <Link
                          key={child.title}
                          href={child.path}
                          className={`block px-6 py-4 rounded-lg font-semibold ${
                            isChildActive
                              ? "text-[#B1905E]"
                              : "text-black hover:text-[#B1905E]"
                          }`}
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-5 ">
          <div className="relative group">
            <div className="flex items-center gap-2 hover_text hover:cursor-pointer">
              <p>Language</p>
              <IoIosArrowDown />
            </div>

            {/* Dropdown */}

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-2 ">
              <p className="block px-6 py-4 rounded-lg hover_text text-left">
                English
              </p>
            </div>
          </div>
          <Link href={"/login"}>
            <button className="text-md bg-[#B1905E] px-5 py-2 text-white font-semibold rounded-full hover:cursor-pointer hover:bg-[#ccae81] mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
              Login
            </button>
          </Link>
          {/* <Link href={"/register"}>
            <button className="text-xl bg-[#FFB22C] px-5 py-2 text-white font-semibold rounded-md hover:cursor-pointer hover:bg-amber-600">
              Sign up
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
