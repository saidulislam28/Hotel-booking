import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import Image from "next/image";
import React from "react";

const title = "Wellness & Fitness";

const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5 flex flex-col gap-20">
        {/* section one  */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/spa.jpg"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-gray-500 text-2xl mt-5 font-medium">
              Spa & Wellness
            </h3>
            <h2 className="text-4xl font-bold text-black">
              Sauna Area at the spa
            </h2>
            <p className="text-gray-500 mt-5">
              Experience ultimate relaxation in our traditional Finnish sauna
              and aromatherapy steam room. Perfect for detoxifying your body,
              improving circulation, and relieving muscle tension after a long
              day of travel or business meetings.
            </p>
            <h5 className="text-gray-500 mt-2">
              Open Hours: 6:00 AM - 10:00 PM
            </h5>
          </div>
          <div className="flex flex-col-reverse  w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/gym.avif"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-col">
              <h3 className="text-gray-500 text-2xl mb-5 font-medium">
                Fitness Center
              </h3>
              <h2 className="text-4xl font-bold text-black">
                State-of-the-Art Gym Equipment
              </h2>
              <p className="text-gray-500 mt-5">
                Stay committed to your fitness routine with our fully equipped
                gymnasium featuring cardio machines, free weights, resistance
                training equipment, and personal training sessions available
                upon request. Complimentary towels and water provided.
              </p>
              <h5 className="text-gray-500 my-2">Open Hours: 24 Hours</h5>
            </div>
          </div>
        </div>
        {/* section two  */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/spa_2.jpg"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-gray-500 text-2xl mt-5 font-medium">
              Spa Services
            </h3>
            <h2 className="text-4xl font-bold text-black">
              Massage & Body Treatments
            </h2>
            <p className="text-gray-500 mt-5">
              Indulge in our signature massage therapies including Swedish, deep
              tissue, hot stone, and aromatherapy treatments. Our licensed
              therapists customize each session to address your specific needs
              and preferences.
            </p>
            <h5 className="text-gray-500 mt-2">
              Open Hours: 9:00 AM - 9:00 PM
            </h5>
          </div>
          <div className="flex flex-col-reverse w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/yoga.jfif"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-col">
              <h3 className="text-gray-500 text-2xl mb-5 font-medium">
                Wellness Programs
              </h3>
              <h2 className="text-4xl font-bold text-black">
                Yoga & Meditation Studio
              </h2>
              <p className="text-gray-500 mt-5">
                Join our daily yoga and meditation classes in a serene
                environment designed to restore balance and harmony. Suitable
                for all levels from beginners to advanced practitioners. Private
                sessions also available.
              </p>
              <h5 className="text-gray-500 my-2">
                Open Hours: 9:00 PM - 12:00 PM
              </h5>
            </div>
          </div>
        </div>
        {/* section three  */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <div className="flex flex-col w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/swimming.avif"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-gray-500 text-2xl mt-5 font-medium">
              Body Fitness
            </h3>
            <h2 className="text-4xl font-bold text-black">
              Indoor Swimming Pool & Jacuzzi
            </h2>
            <p className="text-gray-500 mt-5">
              Take a refreshing dip in our heated indoor pool or unwind in the
              bubbling jacuzzi. Perfect for low-impact exercise, relaxation, or
              spending quality time with family. Pool towels and robes provided.
            </p>
            <h5 className="text-gray-500 mt-2">
              Open Hours: 9:00 PM - 12:00 PM
            </h5>
          </div>
          <div className="flex flex-col-reverse w-full md:w-[50%]">
            <div>
              <Image
                height={300}
                width={600}
                src={"/skin_care.avif"}
                alt="gym"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-col">
              <h3 className="text-gray-500 text-2xl mb-5 font-medium">
                Beauty & Wellness
              </h3>
              <h2 className="text-4xl font-bold text-black">
                Facial & Skin Care Treatments
              </h2>
              <p className="text-gray-500 mt-5">
                Rejuvenate your skin with our luxurious facial treatments using
                premium organic products. From anti-aging therapies to deep
                cleansing and hydration, our estheticians will help you achieve
                glowing, healthy skin.
              </p>
              <h5 className="text-gray-500 my-2">
                Open Hours: 10:00 AM - 8:00 PM
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
