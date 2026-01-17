import React from "react";

const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h2 className={`text-xl md:text-2xl lg:text-4xl font-bold ${className}`}>{title}</h2>;
};

export default SectionTitle;
