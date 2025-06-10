import EventPackageCard from "@/component/events/EventPackageCard";
import { EventData } from "@/constants/datas";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
const title = 'Events & Meetings'
const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
     <div className="max-w-7xl mx-auto p-5">
      {
        EventData.map((item, index)=>(
          <EventPackageCard item={item} key={index} index={index} />
        ))
      }

     </div>
    </>
  );
};

export default page;
