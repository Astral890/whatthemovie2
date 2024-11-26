import React from 'react';
import '../styles/MenuPage.css';
import Link from 'next/link';

// Array of genres with name, image, and route
const genres = [
  { name: 'Sci-Fi', image: '/assets/sci-fi.png', number:878},
  { name: 'Animated', image: '/assets/animated.png', number:16 },
  { name: 'Comedy', image: '/assets/comedy.png', number:35},
  { name: 'Horror', image: '/assets/horror.png', number:27},
];

// Reusable GenreCard component
const GenreCard = ({ genre, number, image }) => (
  <Link href={{ pathname: '/GenrePage', query: { genre,number } }}>
    <div className="genre-card">
      <img src={image} alt={`${genre}`} />
      <div className="genre-text">{genre}</div>
    </div>
  </Link>
);

// Main MenuPage component
const MenuPage = () => (
  <div className="menu-page">
    <h1 className="title">Select Your Genre</h1>
    <div className="genre-grid">
      {genres.map((genre, index) => (
        <GenreCard key={index} genre={genre.name} number={genre.number} image={genre.image} />
      ))}
    </div>
    <Link href="/PointsPage">
      <button className="start-button">Puntos</button>
    </Link>
  </div>
);

export default MenuPage;