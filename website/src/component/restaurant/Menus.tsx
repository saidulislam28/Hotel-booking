import MenuCard from "../MenuCard";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const Menus = ({ data }: any) => {

  if (data?.length > 0) {
    return null;
  }

  return (
    <FadeUpWrapper>
      <div id="menu" className="mt-20">
        <h1 className="text-4xl font-bold text-center mb-16 ">
          Our specials Menu
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {data?.map((item, index) => (
            <MenuCard key={index} item={item}></MenuCard>
          ))}
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default Menus;
