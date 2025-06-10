import Image from "next/image";
import FadeUpWrapper from "../hooks/FadeupWrapper";
import SectionTitle from "../SectionTitle";

const ActivitiesShowCase = () => {
  return (
    <FadeUpWrapper>
      <div className="flex items-center gap-5 my-12">
        <div className="flex flex-col justify-end space-y-6 min-w-[410px]  min-h-[600px]">
          <SectionTitle
            title={"Curious about Surfing? Discover Our San Diego Surf Lessons"}
          />
          <div className="rounded-xl mt-6">
            <Image
              width={400}
              height={290}
              src={"/meal.jpg"}
              alt="menus coming"
              className="w-full rounded-xl object-cover"
              prefix="blur"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end space-y-5  min-h-[600px] min-w-[410px]">
          <p className="text-[#4F5E71]">From beginners to advanced riders, we leave no stone unturned in our quest to provide the best surfing instructors. Each of our instructors is not only highly skilled but also possesses lifeguard and CPR certifications, ensuring your safety while you master the fundamentals during your very first surf lessons</p>
          <p className="text-[#4F5E71]">Phone: +1 2345 6789</p>
          <p className="text-[#4F5E71]">Email: surfingcamp@gmail.com</p>
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
        </div>

        <div className="flex flex-col justify-end space-y-5  min-w-[410px] min-h-[600px]">
          <div className="rounded-xl overflow-hidden">
            <Image
              width={400}
              height={600}
              src={"/Cocktails.png"}
              alt="menus coming"
              className="w-full h-[600px] rounded-xl "
              prefix="blur"
            />
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default ActivitiesShowCase;
