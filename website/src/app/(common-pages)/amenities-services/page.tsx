import AmenityCard from "@/component/amenities-services/AmenityCard";
import { amenitiesData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
const title = "Amenities & Services"
const page = () => {
  return (
    <>
    <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: title },
        ]}
        title={title}
      />
      <div className="max-w-7xl mx-auto p-5">
        {amenitiesData.map((item, index) => (
          <AmenityCard index={index} key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default page;
