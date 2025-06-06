import React from "react";
import AnimateButton from "../AnimateButton";
import { activitiesData } from "@/constants/datas";
import ActivitiesCard from "../ActivitiesCard";

const Activities = () => {
  return (
    <div className="grid grid-cols-4 gap-5 my-20">
      {activitiesData?.map((item, index) => (
        <ActivitiesCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Activities;
