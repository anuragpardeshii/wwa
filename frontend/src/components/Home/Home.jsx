import ImageSlider from "./ImageSlider";
import React from 'react';
import Pioneers from "./Pioneers";
import OurProgrammes from "../Comman/OurPrograms/OurProgrammes"
import Purpose from "./Purpose";
import Gallery from "./Gallery";

const images = [
  '/src/assets/images/hero.png',
  '/src/assets/images/hero1.png',
  'https://lh3.googleusercontent.com/p/AF1QipPG8rAq6Hz7vznPBTDw1w2Q585B5UeckpJOw1WU=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipNQjdZFSygvlBn3VP5OGZE5Lxa_w3n4qOs8GBaS=s1360-w1360-h1020',
];

export default function Home() {
    return(
        <>
            <ImageSlider />
            <Pioneers />
            <OurProgrammes />
            <Purpose />
            <Gallery />
        </>
    )
}