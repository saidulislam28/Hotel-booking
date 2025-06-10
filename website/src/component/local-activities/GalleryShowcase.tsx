import Image from "next/image";
import FadeUpWrapper from "../hooks/FadeupWrapper";
import SectionTitle from "../SectionTitle";

const GalleryShowcase = () => {
  return (
    <FadeUpWrapper>
      <SectionTitle className="text-center" title={"Stories from Surf Coaching Camp"} />
      <div className="flex items-start gap-5 my-12 ">
        <div className="flex flex-col gap-5  min-w-[390px]  h-[600px] ">
          <div className="rounded-xl">
            <Image
              width={400}
              height={250}
              src={"/menu.jpg"}
              alt="menus coming"
              className="w-[400px] h-[250px] rounded-xl object-cover"
              prefix="blur"
            />
          </div>
          <div className="rounded-xl">
            <Image
              width={400}
              height={330}
              src={"/meal.jpg"}
              alt="menus coming"
              className=" w-[400px] h-[330px]  rounded-xl object-cover"
              prefix="blur"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-5  min-w-[390px] h-[600px] ">
          <div className="rounded-xl overflow-hidden">
            <Image
              width={400}
              height={600}
              src={"/Cocktails.png"}
              alt="menus coming"
              className="w-full h-[600px] object-cover rounded-xl "
              prefix="blur"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5  min-w-[390px]  h-[600px] ">
          <div className="rounded-xl">
            <Image
              width={400}
              height={330}
              src={"/meal.jpg"}
              alt="menus coming"
              className=" w-[400px] h-[330px]  rounded-xl object-cover"
              prefix="blur"
            />
          </div>
          <div className="rounded-xl">
            <Image
              width={400}
              height={250}
              src={"/menu.jpg"}
              alt="menus coming"
              className="w-[400px] h-[250px] rounded-xl object-cover"
              prefix="blur"
            />
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default GalleryShowcase;
