import React, { useState } from 'react';
import './App.css';
import Joke from './Components/Jokes/Joke';
import MovieForm from './Components/MovieForm/MovieForm';
import ShowMovie from './Components/MovieForm/Movies/ShowMovie';
import { Movie } from './types';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const addMovie = (newMovie: Movie) => {
    if (newMovie.name === '') {
      window.alert('Write something!');
    } else {
      setMovies(prev => [...prev, newMovie]);

    }
  };

  const deleteMovie = (id: string) => {
    const index = movies.findIndex(m => m.id === id);
    const moviesCopy = [...movies];
    moviesCopy.splice(index,1);
    setMovies(moviesCopy);
  };

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const index = movies.findIndex(m => m.id === id);
    const moviesCopy = [...movies];
    const movieCopy = {...movies[index]};
    movieCopy.name = event.target.value;
    moviesCopy[index] = movieCopy;
    setMovies(moviesCopy);
  };

  let moviesList: React.ReactNode = movies.map((movie, id: number, index) => (
    <ShowMovie
      key={id}
      movie={movie} 
      movieChange={event => changeMovie(event, movie.id)}
      deleteMovie={() => deleteMovie(movie.id)}
      />
  ));

  return (
    <div className="App">
      <div className='task1'>
      <h1>Task 1</h1>
      <MovieForm form={addMovie}/>
          {moviesList}
      </div>

        <h1>Task 2</h1>
      <div className='task2'>
        <Joke/>
      </div>

    </div>
  );
}

export default App;
