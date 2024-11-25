"use client"
import PointsCounter from '../components/PointsCounter';
import '../styles/UserPages.css';
import { useStore } from '../utilis/store';
import { useEffect, useState } from 'react';
import { methods } from '../utilis/firebase';
import Link from 'next/link';

export default function PointsPage(){
  const email=useStore((state) =>{return state.email});
  const [points,setPoints]=useState(null);
  useEffect(()=>{
    const fetchPoints = async () => {
      if (email) {
        const fetchedPoints = await methods.getPoints(email); 
        setPoints(fetchedPoints);
      }
    }
    fetchPoints();
  },[email])
    return (
        <div className="user-page">
          <div className="user-grid">
          <h1>Puntos</h1>
            <div className="user-card">
                <PointsCounter points={points}/>
                <br/>
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