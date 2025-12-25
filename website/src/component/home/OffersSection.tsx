/* eslint-disable */
import React from "react";
import Card from "../Card";

const OfferSection = ({ data }: any) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {data.map((d: any) => (
        <Card key={d?._id} item={d} />
      ))}
    </div>
  );
};

export default OfferSection;
