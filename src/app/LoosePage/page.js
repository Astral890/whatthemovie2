"use client";
import '../styles/UserPages.css';
import Link from 'next/link';
import { methods } from '../utilis/firebase';
import { useStore } from '../utilis/store';
import { useEffect } from 'react';

export default function LoosePage(){
  return (
    <div className="user-page">
      <div className="user-grid">
        <h1>Perdiste</h1>
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