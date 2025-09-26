"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseDotButton = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export function useDotButton(
  emblaApi: EmblaCarouselType | undefined
): UseDotButton {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
}

/* ---------------- Button ---------------- */

type DotButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const DotButton = forwardRef<HTMLButtonElement, DotButtonProps>(
  function DotButton({ type = "button", ...rest }, ref) {
    return <button ref={ref} type={type} {...rest} />;
  }
);
