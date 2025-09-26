"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

export type ProjectSlide = {
  id: string;
  title: string;
  src: string;
  alt: string;
  desc: string;
  href?: string;
};

type Props = {
  items: ProjectSlide[];
  options?: EmblaOptionsType;
};

export default function Carousel({ items, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <div className="embla__slide text-center" key={item.id}>
              <img
                className="embla__slide__img"
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <h4 className="text-lg mt-4 mb-2">{item.title}</h4>
              <h5 className="text-xs px-1 text-justify md:text-center">
                {item.desc}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
