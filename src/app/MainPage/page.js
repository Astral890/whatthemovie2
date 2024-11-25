import React from 'react';
import '../styles/MenuPage.css';
import Link from 'next/link';

// Array of genres with name, image, and route
const genres = [
  { name: 'Sci-Fi', image: '/assets/sci-fi.png', route: '/sci-fi' },
  { name: 'Animated', image: '/assets/animated.png', route: '/animated' },
  { name: 'Comedy', image: '/assets/comedy.png', route: '/comedy' },
  { name: 'Horror', image: '/assets/horror.png', route: '/horror' },
];

// Reusable GenreCard component
const GenreCard = ({ genre }) => (
  <Link href={genre.route}>
    <div className="genre-card">
      <img src={genre.image} alt={`${genre.name}`} />
      <div className="genre-text">{genre.name}</div>
    </div>
  </Link>
);

// Main MenuPage component
const MenuPage = () => (
  <div className="menu-page">
    <h1 className="title">Select Your Genre</h1>
    <div className="genre-grid">
      {genres.map((genre, index) => (
        <GenreCard key={index} genre={genre} />
      ))}
    </div>
    <Link href="/PointsPage">
      <button className="start-button">Puntos</button>
    </Link>
  </div>
);

export default MenuPage;