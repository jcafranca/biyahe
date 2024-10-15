import SectionTitle from "@/components/customs/Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./data";

const Features = () => {
  return (
    <section className="p-10 mb-32 rounded-lg bg-muted/50">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Main Features Of Love8"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature  key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
