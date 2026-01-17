/* eslint-disable */
import React from "react";
import Card from "../Card";

const OfferSection = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10 px-5">
      {data?.map((d: any) => (
        <Card key={d?._id} item={d} />
      ))}
    </div>
  );
};

export default OfferSection;
