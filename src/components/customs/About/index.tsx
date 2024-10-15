import { useRef } from "react";
import { Statistics } from "./Statistics";
import { useIsVisible } from "@/hooks/useIsVisible";

export const About = () => {
    const ref = useRef<HTMLInputElement>(null);
    const isVisible = useIsVisible(ref)
    
    return (
        <section ref={ref} id="about" className={`mx-auto py-24 ${isVisible && "animate-scale-up"}`}>
            <div className="py-12 rounded-lg bg-muted/50">
                <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
                    <img
                        src="./images/tour.png"
                        alt=""
                        className="md:w-[300px] object-contain rounded-lg"
                    />
                    <div className="flex flex-col justify-between bg-green-0">
                        <div className="pb-6">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                                    About{" "}
                                </span>
                                Company
                            </h2>
                            <p className="mt-4 text-xl text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};
