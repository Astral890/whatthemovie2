import React from 'react';
import '../styles/TitleCard.css';
import Link from 'next/link';

const TitleCard = () => {
  return (
    <div className="title-card">
      <nav>
      <div className="title-text-container">
        <h1 className="title-text">Movie Guesser</h1>
        <div className="flex flex-col space-y-4 w-64">
            <Link 
              href="/MainPage"
              className="px-6 py-2 text-lg font-semibold text-black 
              bg-red-600 rounded-lg hover:bg-red-700 transition-colors 
              duration-200 text-center"
            >
              Play
            </Link>
            
            <Link 
              href="/LoginPage"
              className="px-6 py-2 text-lg font-semibold text-black 
              bg-red-600 rounded-lg hover:bg-red-700 transition-colors 
              duration-200 text-center"
            >
              Iniciar Sesión
            </Link>
            
            <Link 
              href="/SignUpPage"
              className="px-6 py-2 text-lg font-semibold text-black 
              bg-red-600 rounded-lg hover:bg-red-700 transition-colors 
              duration-200 text-center"
            >
              Registrarse
            </Link>
          </div>
      </div>
      </nav>
    </div>
  );
};

export default TitleCard;