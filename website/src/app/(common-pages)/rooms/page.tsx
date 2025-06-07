import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
import React from "react";

const Rooms = () => {
  return (
    <div>
      <TitleHelmet title="Rooms" />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Rooms", href: "/rooms" },
        ]}
        title="Room"
      />
      Hello room
    </div>
  );
};

export default Rooms;
