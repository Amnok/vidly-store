import React from 'react';
import './App.css';
import Movies from './components/movies';

function App() {
  return (
 <main className="container">
   <h2>Currently showing</h2>
   <Movies/>
 </main>
  );
}

export default App;
