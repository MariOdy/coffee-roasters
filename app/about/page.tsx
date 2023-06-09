import PageBanner from "@/components/PageBanner";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <PageBanner
        pageTitle="About us"
        pageDescription="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <p>This is the about page</p>
    </div>
  );
};
export default AboutPage;
