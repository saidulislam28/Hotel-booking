import React from "react";
import { getHeader } from "../../utility/helmet";
import PageTitle from "../../utility/PageTitle";
const title = "Dashboard";
const index = () => {
  return (
    <>
      {getHeader(title)}
      <PageTitle
        title={title}
        breadcrumbs={[
          // {
          //   title: "Dashboard",
          //   href: "/",
          // },
          {
            title: title,
          },
        ]}
        rightSection={""}
      />
      <div className="">
        <div className=" font-bold">This is dashboard</div>
      </div>
    </>
  );
};

export default index;
