"use client";
import React, { useCallback } from "react";
// import Styles from "./sandbox.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slide1 from "/public/bg03.jpg";
import Slide2 from "/public/bg06.jpg";
import Slide3 from "/public/bg12.jpg";
import Slide4 from "/public/bg16.jpg";
import Slide5 from "/public/bg21.jpg";
import Image from "next/image";

const Sandbox = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={Slide1} className="img" />
          </div>
          <div className="embla__slide">
            <Image src={Slide2} className="img" />
          </div>
          <div className="embla__slide">
            <Image src={Slide3} className="img" />
          </div>
        </div>
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Sandbox;
