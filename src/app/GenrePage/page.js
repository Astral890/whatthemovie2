"use client"
import { useEffect, useState } from 'react';
import MovieFrame from '../components/MovieFrame';
import { useSearchParams } from 'next/navigation';
import '../styles/GenrePage.css';
import OptionButtons from '../components/OptionButtons';
import { useRouter } from 'next/navigation';

export default function GenrePage(){
  const router = useRouter();
  const searchParams = useSearchParams();
  const number = searchParams.get('number');
  const genre= searchParams.get('genre')
  const [idx, setIdx] = useState(0);
  const [win, setWin] = useState(null);
  
  const [movies, setMovies] = useState([]);
  const [images, setImages]=useState([]);
  const [hasWon, setHasWon] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres="+number+"&api_key=ada074b6a5691631b70bfbcaf68ebad9");
      const data = await response.json();
      console.log(data);
      const m=[];
      for(let i=0;i<4;i++){
        let idx=getRand(20);
        m.push({
          title: data.results[idx].original_title,
          id: data.results[idx].id
        });
      }
      setMovies(m);
    } catch (error) {
      console.error('Error al llamar a la API:', error);
    }
  };

  const fetchImages=async()=>{
    try {
      console.log(movies);
      let id;
      for(let i=0;i<4;i++){
        if(movies[i].title===win){
          id=movies[i].id;
        }
      }
      const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"/images?api_key=ada074b6a5691631b70bfbcaf68ebad9");
      const data = await response.json();
      console.log(data);
      const im=[];
      for(let i=0;i<4;i++){
        im[i]="https://image.tmdb.org/t/p/original"+data.backdrops[i].file_path;
      }
      setImages(im);
    } catch (error) {
      console.error('Error al llamar a la API:', error);
    }
  };

  const handleOptionClick = (option) => {
    console.log(option.option);
    console.log(win);
    if (option.option === win) {
      setHasWon(true);
      router.push('/WinPage');
    } else {
      console.log("ta mal");
    }
  };

  const handleImageClick = () => {
    setIdx(prevIdx => (prevIdx + 1) % images.length);
  };

  function getRand(max){
    return Math.floor(Math.random()*max);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const random = Math.floor(Math.random() * 4);
      setWin(movies[random].title);
    }
  }, [movies]);

  useEffect(() => {
    fetchImages();
    console.log(images);
  }, [movies,win]);

  return (
    <div className="genre-page">
      <h1>{genre} Movies</h1>
      <div className="carousel-container">
        <MovieFrame image={images[idx]} onClick={handleImageClick} />
      </div>
      <div>
          <OptionButtons options={movies.map(movie => movie.title)} onOptionClick={handleOptionClick}></OptionButtons>
      </div>
      {hasWon && <h2>¡Ganaste!</h2>}
    </div>
  );
};


