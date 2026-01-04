import TitleHelmet from "@/utils/Helmet";
import PageTitle from "@/utils/PageTitle";
const title = "Profile";
const page = () => {
  return (
    <>
      <TitleHelmet title={title} />
      <PageTitle
        breadcrumbs={[{ title: "Home", href: "/" }, { title: title }]}
        title={title}
      />
    </>
  );
};

export default page;
