import ImageSlider from "./ImageSlider";
import React from 'react';
import Logo from "./Logo";
import Pioneers from "./Pioneers";
import OurProgrammes from "../Comman/OurPrograms/OurProgrammes"

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipNjanIZR2DhJs7iykd8oreQtXR6H2qTGKbIFk9i=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipPG8rAq6Hz7vznPBTDw1w2Q585B5UeckpJOw1WU=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipNQjdZFSygvlBn3VP5OGZE5Lxa_w3n4qOs8GBaS=s1360-w1360-h1020',
];

export default function Home() {
    return(
        <>
            <ImageSlider images={images} />
            <Pioneers />
            <OurProgrammes />
            <Logo />
        </>
    )
}