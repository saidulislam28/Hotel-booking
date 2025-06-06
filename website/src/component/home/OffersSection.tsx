import React from "react";
import Card from "../Card";


const OfferSection = ({data}) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {data.map((d) => (<Card key={d?.id} item={d} />
      ))}
    </div>
  );
};

export default OfferSection;
