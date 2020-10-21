import React, {useState} from 'react';
import './App.css';
import Movies from './components/movies';
import moviez from './assets/mock.json';

function App() {
  const [movies, setMovies] = useState(moviez);
  if (movies && movies.length <= 0) return null;
  return (
 <main className="container" style={{padding: '60px'}}>
   {/* <h2>Currently showing {movies.length} Movies</h2> */}
   <Movies movies = {movies} setMovies = {setMovies}/>
 </main>
  );
}

export default App;
