import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[450px]">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
