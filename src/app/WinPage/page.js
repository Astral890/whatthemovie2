"use client";
import '../styles/UserPages.css';
import Link from 'next/link';
import { methods } from '../utilis/firebase';
import { useStore } from '../utilis/store';
import { useEffect } from 'react';

export default function WinPage(){
  const email = useStore((state) => state.email);

  useEffect(() => {
    const fetchPoints = async () => {
      if (email) {
        const fetchedPoints = await methods.getPoints(email); 
        setPoints(fetchedPoints);
      }
    }
    
    fetchPoints();
    addPoints();
  }, [email]);

  const addPoints = async () => {
    console.log(email);
    if (email !== null) {
      await methods.addPoints(email);
    }
  }

  return (
    <div className="user-page">
      <div className="user-grid">
        <h1>¡Ganaste!</h1>
        <div className="user-card">
          <Link 
            href="/MainPage"
            className="px-6 py-2 text-lg font-semibold text-black 
            bg-red-600 rounded-lg hover:bg-red-700 transition-colors 
            duration-200 text-center"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}