"use client";
import React, { useCallback } from "react";
import styles from "./slider.module.css";
import Slide1 from "/public/batamindo-depan.jpg";
import Slide2 from "/public/batamindo-dormitory.jpg";
import Slide3 from "/public/batamindo-pabrik.jpg";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.emba} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image src={Slide1} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide2} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide3} className={styles.img} />
        </div>
        {/* <button onClick={scrollNext} enabled={prevb}>Next</button>
        <button onClick={scrollPrev} className={styles.button}>Prev</button> */}
      </div>
      
    </div>
  );
};

export default Slider;
