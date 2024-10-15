import SectionTitle from "@/components/customs/Common/SectionTitle";
import SingleFeature from "@/components/customs/Features/SingleFeature";
import pricingData from "./data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  import Image from "next/image";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="p-10 rounded-lg bg-muted/50">
      <div className="container">
        <SectionTitle
          subtitle="Pricing"
          title="Best Travel Options"
          paragraph="Grab it! Only limited seats offer."
        />
        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {pricingData.map((pricing, i) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="flex justify-center items-center">
                <img src={pricing.icon} alt="" width={500} height={0} />
                <h3 className="text-xl font-semibold py-2">{pricing.title}</h3>
              </CardHeader>
              <CardContent>{pricing.paragraph}</CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-500 dark:text-foreground"
                  onClick={() => {
                    pricing.btnLink;
                  }}
                >
                  {pricing.btn}
                </Button>
              </CardFooter>
            </Card>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
