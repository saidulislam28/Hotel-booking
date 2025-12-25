import RestaurantBarBanner from "@/component/restaurant-bar/RestaurantBanner";
import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
const title = "Restaurant & Bar";
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
      <div>
        <RestaurantBarBanner />
      </div>
    </>
  );
};

export default page;
