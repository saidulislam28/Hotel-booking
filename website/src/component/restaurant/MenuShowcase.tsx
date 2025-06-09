import Image from "next/image";
import SectionTitleMedium from "../SectionTitleMedium";

const MenuShowcase = () => {
  return (
    <div className="flex items-center gap-5 mt-20">
      <div className="flex flex-col justify-center space-y-5  min-h-[600px] min-w-[410px]">
        <SectionTitleMedium title={"Good time Great Taste On Your Date"} />
        <div className="rounded-xl">
          <Image
            width={400}
            height={270}
            src={"/menu.jpg"}
            alt="menus coming"
            className="w-full  rounded-xl object-cover"
            prefix="blur"
          />
        </div>
        <h1 className="text-xl font-bold">Menu</h1>
      </div>
      <div className="flex flex-col space-y-5  min-w-[410px] min-h-[600px]">
        <div className="rounded-xl">
          <Image
            width={400}
            height={600}
            src={"/Cocktails.png"}
            alt="menus coming"
            className="w-full h-full rounded-xl "
            prefix="blur"
          />
        </div>
        <h1 className="text-xl font-bold">Cocktail</h1>
      </div>

      <div className="flex flex-col justify-center space-y-5 min-w-[410px]  min-h-[600px]">
        <div className="rounded-xl">
          <Image
            width={400}
            height={270}
            src={"/meal.jpg"}
            alt="menus coming"
            className="w-full rounded-xl object-cover"
            prefix="blur"
          />
        </div>
        <h1 className="text-xl font-bold">Desire Meal</h1>
      </div>
    </div>
  );
};

export default MenuShowcase;
