/* eslint-disable  */
"use client";
import { useAuth } from "@/providers/useAuth";
import Routes from "@/utils/routes";
import { List, User, CalendarDays, LogOut, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // State to track which parent routes have their dropdown open
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const { user, signOut, loading } = useAuth();
  const firstLetter = user?.name?.trim()?.charAt(0)?.toUpperCase() || "?";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const getColorFromLetter = (letter: string) => {
    const colors = [
      "#EF4444", // red
      "#F97316", // orange
      "#F59E0B", // amber
      "#10B981", // green
      "#3B82F6", // blue
      "#6366F1", // indigo
      "#8B5CF6", // violet
      "#EC4899", // pink
    ];

    const charCode = letter.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  // Toggle dropdown for a specific route
  const toggleDropdown = (routeTitle: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [routeTitle]: !prev[routeTitle],
    }));
  };

  // Close mobile menu and reset dropdowns
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <div>
      {/* Desktop view - unchanged */}
      <div className="h-20 bg-white relative z-50 shadow-md hidden md:block">
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
              <h2 className="font-bold text-2xl">Sailing</h2>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-7">
            {Routes?.map((route: any) => {
              const isActive = pathname === route.path;
              return (
                <div key={route.title} className="relative group">
                  <Link
                    href={route.path ? route.path : ""}
                    className={`px-4 py-2 font-semibold flex items-center gap-2 ${isActive
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
                      {route?.children?.map((child: any) => {
                        const isChildActive = pathname === child.path;
                        return (
                          <Link
                            key={child.title}
                            href={child.path}
                            className={`block px-6 py-4 rounded-lg font-semibold ${isChildActive
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
            {loading ? (
              <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <div className="relative" ref={dropdownRef}>
                {/* Avatar Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-center h-12 w-12 rounded-full cursor-pointer font-semibold text-white select-none transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B1905E]"
                  style={{ backgroundColor: getColorFromLetter(firstLetter) }}
                  aria-haspopup="true"
                  aria-expanded={open}
                >
                  {firstLetter}
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top-right ${open
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                  {/* User info header */}
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>

                  <div className="py-1">
                    <Link
                      href="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B1905E] transition-colors"
                    >
                      <User size={16} />
                      Profile
                    </Link>
                    <Link
                      href="/my-bookings"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B1905E] transition-colors"
                    >
                      <CalendarDays size={16} />
                      Bookings
                    </Link>
                  </div>

                  <div className="border-t border-gray-100">
                    <button
                      onClick={() => {
                        setOpen(false);
                        signOut();
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <button className="text-md bg-[#B1905E] px-5 py-2 text-white font-semibold rounded-full hover:cursor-pointer hover:bg-[#ccae81] mb-0 hover:mb-5 transition-all duration-400 ease-in-out">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="h-20 bg-white relative z-50 shadow-md block md:hidden">
        <div className="max-w-2xl mx-auto px-5 h-full flex items-center justify-between">
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

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2"
            aria-label="Open menu"
          >
            <List className="w-8 h-8 text-black" />
          </button>
        </div>

        {/* Mobile Menu Overlay/Sidebar */}
        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Sidebar Menu */}
          <div className="absolute inset-y-0 left-0 w-full max-w-full bg-white shadow-xl overflow-y-auto">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Image
                  width={10}
                  height={10}
                  className="h-10 w-10"
                  src="/globe.svg"
                  alt="Logo"
                  prefix="blur"
                />
                <h2 className="font-bold text-2xl">Saidul</h2>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-black" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4">
              {/* Main Routes */}
              <div className="space-y-1">
                {Routes?.map((route: any) => {
                  const isActive = pathname === route.path;
                  const hasChildren = route?.children?.length > 0;
                  const isDropdownOpen = openDropdowns[route.title];

                  return (
                    <div
                      key={route.title}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      {/* Parent Route */}
                      <div className="flex items-center justify-between">
                        {route.path ? (
                          <Link
                            href={route.path}
                            onClick={closeMobileMenu}
                            className={`flex-grow px-4 py-3 font-semibold text-left ${isActive
                              ? "text-[#B1905E]"
                              : "text-black hover:text-[#B1905E]"
                              }`}
                          >
                            {route.title}
                          </Link>
                        ) : (
                          <span
                            className={`flex-grow px-4 py-3 font-semibold text-left ${isActive ? "text-[#B1905E]" : "text-black"
                              }`}
                          >
                            {route.title}
                          </span>
                        )}

                        {/* Dropdown Toggle Button */}
                        {hasChildren && (
                          <button
                            onClick={() => toggleDropdown(route.title)}
                            className="p-3"
                            aria-expanded={isDropdownOpen}
                            aria-label={`Toggle ${route.title} menu`}
                          >
                            <IoIosArrowDown
                              className={`transition-transform duration-400 ${isDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Children Routes (Dropdown) */}
                      {hasChildren && isDropdownOpen && (
                        <div className="ml-6 pl-2 border-l border-gray-200">
                          {route.children.map((child: any) => {
                            const isChildActive = pathname === child.path;
                            return (
                              <Link
                                key={child.title}
                                href={child.path}
                                onClick={closeMobileMenu}
                                className={`block px-4 py-2.5 font-medium ${isChildActive
                                  ? "text-[#B1905E]"
                                  : "text-gray-700 hover:text-[#B1905E]"
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

              {/* User Section */}
              <div className="mt-6 pt-6 border-t  border-gray-200">
                {loading ? (
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-32" />
                    </div>
                  </div>
                ) : user ? (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-3 font-semibold text-black hover:text-[#B1905E] hover:bg-gray-50 rounded-lg"
                      >
                        <User size={18} />
                        Profile
                      </Link>
                      <Link
                        href="/my-bookings"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 px-4 py-3 font-semibold text-black hover:text-[#B1905E] hover:bg-gray-50 rounded-lg"
                      >
                        <CalendarDays size={18} />
                        Bookings
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          closeMobileMenu();
                        }}
                        className="mt-5 flex items-center justify-between w-full px-4 py-3 bg-[#B1905E] text-white rounded-xl"
                      >
                        <span>Logout</span>
                        <LogOut color="white" size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="block w-full text-center text-md bg-[#B1905E] px-5 py-3 text-white font-semibold rounded-full hover:bg-[#ccae81] transition-all duration-400"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
