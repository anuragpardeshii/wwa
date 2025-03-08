import ImageSlider from "./ImageSlider";
import React from "react";
import Pioneers from "./Pioneers";
import OurProgrammes from "../Comman/OurPrograms/OurProgrammes";
import Purpose from "./Purpose";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Awards from "./Awards";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <>
      <ImageSlider />
      <Pioneers />
      <OurProgrammes />
      <Purpose />
      <Gallery />
      <Awards />
      <Testimonial />
    </>
  );
}
