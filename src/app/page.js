import React from 'react';
import './MainPage.css'
import TitleCard from './components/TitleCard';
import Link from 'next/link';

export default function Home() {
  const movieImages = [
    { src: 'image1.png', alt: 'Movie 1', className: 'image-left' },
    { src: 'image2.png', alt: 'Movie 2', className: 'image-top' },
    { src: 'image3.png', alt: 'Movie 3', className: 'image-right' },
    { src: 'image4.png', alt: 'Movie 4', className: 'image-bottom' }
  ];

  return (
    <div className="menu-page">
      <div className="image-grid-container">

      {movieImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`movie-image`}
          />
        ))}

        <div className="title-card-overlay">
          <TitleCard />
        </div>
      </div>
    </div>
  );
}
