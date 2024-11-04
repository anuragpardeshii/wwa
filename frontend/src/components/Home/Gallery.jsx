import "./Gallery.css";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';

export default function Gallery() {

  const image = [
    { id: 1, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp' },
    { id: 2, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp' },
    { id: 3, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp' },
    { id: 3, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp' },
    { id: 3, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp' },
    { id: 3, imgSrc: 'https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp' },
  ];

  return (
    <div className='gallery-section'>
      <MDBRow style={{ margin: "0" }}>
        {image.map((image, index) => (
          <MDBCol lg={4} md={12} className='mb-4 mb-lg-0' key={image.id}>
            <div className='bg-image'>
              <img src={image.imgSrc} alt={`Image thumbnail ${index + 1}`} className='w-100' />
              <a style={{ cursor: 'pointer' }} onClick={() => openModal(index)}>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
              </a>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
      <div className="btn-section text-center">
      <button class="btn" type="submit">Show more</button>
      </div>
    </div>
    
  );
}
