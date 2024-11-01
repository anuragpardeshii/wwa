import ImageSlider from "./ImageSlider";
import React from 'react';

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipNjanIZR2DhJs7iykd8oreQtXR6H2qTGKbIFk9i=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipPG8rAq6Hz7vznPBTDw1w2Q585B5UeckpJOw1WU=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipNjanIZR2DhJs7iykd8oreQtXR6H2qTGKbIFk9i=s1360-w1360-h1020',
];

export default function Home() {
    return(
        <>
            <ImageSlider images={images} />
        </>
    )
}