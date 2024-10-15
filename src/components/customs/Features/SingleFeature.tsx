import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="flex justify-center items-center">
          <Image src={icon} alt="" width={150} height={0} />
          <h3 className="text-xl font-semibold py-2">{title}</h3>
        </CardHeader>
        <CardContent>{paragraph}</CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              btnLink;
            }}
          >
            {btn}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleFeature;
