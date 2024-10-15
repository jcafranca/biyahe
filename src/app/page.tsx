"use client";

import Hero from "@/components/customs/Hero";
import Features from "@/components/customs/Features";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/components/customs/Footer";
import { About } from "@/components/customs/About";
import Distinations from "@/components/customs/Destination/Destinations";
import { EmblaOptionsType } from 'embla-carousel'
import Pricing from "@/components/customs/Pricing";

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Hero />
      <Pricing />
      <About />
      <Features />
      <Distinations slides={SLIDES} options={OPTIONS} />
    </>
  );
}
