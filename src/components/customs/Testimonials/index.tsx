import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsVisible } from "@/hooks/useIsVisible";
import { QuoteIcon, TextQuoteIcon } from "lucide-react";
import { useRef } from "react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Testimonials = () => {
  const ref = useRef<HTMLInputElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`p-10 mt-24 rounded-lg bg-muted/50 ${
        isVisible && "animate-scale-up"
      }`}
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        Discover Why
        <span className="text-transparent bg-gradient-to-b from-blue-500 to-blue-100 bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This page.
      </h2>

      <p className="pt-4 pb-8 text-xl text-muted-foreground flex">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent><span className="text-2xl">"</span>{comment}<span className="text-2xl">"</span></CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
