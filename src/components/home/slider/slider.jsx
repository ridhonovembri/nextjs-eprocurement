"use client";
import React, { useCallback } from "react";
import styles from "./slider.module.css";
import Slide1 from "/public/bg03.jpg";
import Slide2 from "/public/bg06.jpg";
import Slide3 from "/public/bg12.jpg";
import Slide4 from "/public/bg16.jpg";
import Slide5 from "/public/bg21.jpg";
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
          <Image src={Slide3} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide2} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide4} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide5} className={styles.img} />
        </div>
        <div className={styles.embla__slide}>
          <Image src={Slide1} className={styles.img} />
        </div>
        {/* <button onClick={scrollNext} enabled={prevb}>Next</button>
        <button onClick={scrollPrev} className={styles.button}>Prev</button> */}
      </div>
      
    </div>
  );
};

export default Slider;
