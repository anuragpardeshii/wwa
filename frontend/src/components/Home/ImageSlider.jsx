import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          style={{height: "90vh", width: "100%", marginTop: "10vh"}}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "90vh", width: "100%", marginTop: "10vh"}}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "90vh", width: "100%", marginTop: "10vh"}}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
