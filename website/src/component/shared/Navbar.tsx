import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="h-16 bg-[#FA812F]">
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
          <h2 className="font-bold text-2xl">Saidul Dev</h2>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <Link href={"/"}>
              <li className="font-semibold text-lg text-white">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="font-semibold text-lg text-white">About</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-5 ">
          <Link href={"/login"}>
            <button className="text-xl bg-[#F3C623] px-5 py-2 text-white font-semibold rounded-md hover:cursor-pointer hover:bg-amber-500">
              Login
            </button>
          </Link>
          <Link href={"/register"}>
            <button className="text-xl bg-[#FFB22C] px-5 py-2 text-white font-semibold rounded-md hover:cursor-pointer hover:bg-amber-600">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;