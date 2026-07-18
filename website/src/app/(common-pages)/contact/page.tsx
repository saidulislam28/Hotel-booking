"use client"

import Image from "next/image";

const SupportPage = () => {


    return (
        <div className="min-h-[38vh] max-w-[1190px] w-full mx-auto px-2 mt-10">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="relative w-[500px] h-[400px]">
                    <Image src="/contact.svg" alt="Contact" fill className="w-full h-full" />
                </div>
                <a href={`https://wa.me/${"8801639279028"}`} target="_blank" className="bg-[#B1905E] mb-10 text-white text-center px-2 py-2 font-bold rounded-md max-w-64 w-full cursor-pointer">
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default SupportPage;

