import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import FadeUpWrapper from "../hooks/FadeupWrapper";

const AboutRestaurant = () => {
  return (
    <FadeUpWrapper>
      <div className="flex items-start justify-between gap-5 mt-20">
        <div className="w-[60%]">
          <Image
            width={520}
            height={540}
            src={"/Menu.png"}
            alt="menus coming"
            prefix="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[40%]">
          <SectionTitle
            title={"where culinary artistry meets exquisite flavors!"}
          />
          <p className="text-[#4F5E71] mt-8">
            At Sailing, we pride ourselves on serving delectable dishes crafted
            with the finest ingredients sourced locally and globally. Whether
            you are a connoisseur of classic favorites or an adventurer seeking
            bold new flavors, our menu is sure to tantalize your taste buds.
          </p>
          <p className="text-[#4F5E71] mt-8">
            Step into our inviting ambiance and let our attentive staff guide
            you through a culinary journey you wont soon forget. From the first
            sip of our signature cocktails to the last bite of our decadent
            desserts, every moment at Sailing is designed to delight your
            senses.
          </p>
          <div className="flex flex-col gap-1 mt-8 text-left">
            <p className="text-2xl text-[#4F5E71] italic">Md Saidul Houlader</p>
            <p className="text-[#4F5E71]">Ceo & Founder</p>
          </div>
        </div>
      </div>
    </FadeUpWrapper>
  );
};

export default AboutRestaurant;
