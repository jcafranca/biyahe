import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPin,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Footer = () => {
  const form = useForm();

  return (
    <footer
      className="relative text-primary w-full mt-24 p-8 bottom-0"
    >
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link
                className="flex flex-row py-2 gap-x-2 mr-10 font-bold"
                href="/"
              >
                <img src="./images/logo.png" width={50} height={24} />
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <span className="text-blue-500">LOVE&nbsp;</span>8
                  </div>
                  <span className="text-xs">Travel & Tours</span>
                </div>
              </Link>
              <p className="mb-8 text-sm max-w-[270px] text-muted-foreground">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="flex items-center flex-row gap-2 text-muted-foreground ">
                <Link href={""} className="hover:text-foreground">
                  <FacebookIcon />
                </Link>
                <Link href={""} className="hover:text-foreground">
                  <TwitterIcon />
                </Link>
                <Link href={""} className="hover:text-foreground">
                  <InstagramIcon />
                </Link>
                <Link href={""} className="hover:text-foreground">
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-5 text-lg font-semibold text-foreground">
                About Us
              </h4>
              <div className="grid gap-y-2 text-sm text-muted-foreground">
                <Link href={"#"} className="hover:text-foreground">
                  Home
                </Link>
                <Link href={"#"} className="hover:text-foreground">
                  Features
                </Link>
                <Link href={"#"} className="hover:text-foreground">
                  About
                </Link>
                <Link href={"#"} className="hover:text-foreground">
                  Testimonial
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-5 text-lg font-semibold">Features</h4>
              <div className="grid gap-y-2 text-sm text-muted-foreground">
                <Link href={""} className="hover:text-foreground">
                  How it works
                </Link>
                <Link href={""} className="hover:text-foreground">
                  Privacy policy
                </Link>
                <Link href={""} className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href={""} className="hover:text-foreground">
                  Refund policy
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-5 text-lg font-semibold text-foreground">
                Office
              </h4>
              <div className="grid gap-y-2 text-muted-foreground text-sm">
                <Link
                  href={""}
                  className="hover:text-foreground flex flex-row gap-1.5 items-center"
                >
                  <MapPin className="text-red-600 size-4" />
                  <span>Masbate, Philippines</span>
                </Link>
                <Link
                  href={""}
                  className="hover:text-foreground flex flex-row gap-1.5 items-center"
                >
                  <MailIcon className="text-red-600 size-4" />
                  contact@example.com
                </Link>
                <Link
                  href={""}
                  className="hover:text-foreground flex flex-row gap-1.5 items-center"
                >
                  <PhoneIcon className="text-red-600 size-4" />
                  +152 534-468-854
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-5 text-lg font-semibold text-foreground">
                Newsletter
              </h4>
              <div className="grid gap-y-2  text-sm text-muted-foreground">
                <p>Sign up and receive the latest tips via email.</p>

                <form>
                  <div className="grid w-full items-center gap-2 mt-2">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="email">
                        Write your email <b className="text-red-600">*</b>
                      </Label>
                      <div className="relative flex items-center max-w-2xl">
                        <MailIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                        <Input placeholder="Email" className=" pl-8" />
                      </div>
                    </div>
                    <Button>Subscribe</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-opacity-40 py-2">
        <div className="grid gap-2">
          <div className="mx-auto text-xs text-muted-foreground gap-x-3 flex items-center">
            <Link href={""} className="hover:text-foreground">
              Privacy policy
            </Link>
            <Link href={""} className="hover:text-foreground">
              Legal notice
            </Link>
            <Link href={""} className="hover:text-foreground">
              Terms of service
            </Link>
          </div>
          <div className="flex justify-center">
            <p className="text-muted-foreground text-xs">
              Designed and Developed by{" "}
              <Link href={"#"} className="hover:text-foreground">
                Jerome
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
