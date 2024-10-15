import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButtons";
import { DotButton, useDotButton } from "./DotButton";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "../Common/SectionTitle";
import Images from "./Data";

const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Distinations: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];
        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="embla bg-muted/50 py-12 rounded-lg">
      <div className="px-10">
        <SectionTitle
          subtitle="Locations"
          title="Top Destinations"
          paragraph="Planning for a trip? We will organize your trip with the best places and within best budget!"
        />
        <div className="grid md:grid-flow-col mt-10">
          <div className="embla__viewport flex flex-col rounded-lg justify-center" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <img
                    className="embla__slide__img"
                    src={Images[index].image_path}
                    alt={Images[index].alt}
                  />
                </div>
              ))}
            </div>

            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />

            <div className="flex flex-row gap-2 pt-5 justify-center ">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`bg-muted-foreground/20  h-5 w-5 rounded-full ${
                    index != selectedIndex ? "" : "bg-foreground"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="md:px-8 py-3">
            <h3 className="mb-6 md:text-2xl text-2xl md:leading-normal leading-normal overflow-hidden">
              <strong>{Images[selectedIndex].title}</strong> <br /> Agency:{" "}
              {Images[selectedIndex].agency}
            </h3>
            <p className="text-slate-400 max-w-xl mb-6">
              {Images[selectedIndex].description}
            </p>
            <Button className="h-10 duration-500 bg-red-500 text-white hover:bg-red-400">
              Read More <ChevronRight className="align-middle ms-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distinations;
