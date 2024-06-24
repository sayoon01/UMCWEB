//import  { useState, useEffect } from 'react';
import { movies } from './moviedummy';
import Movie from './component/Movie'
import './App.css';

function App() {
  return (
    <div className="app-container">
      {
        movies.results.map((item)=>{
          return(
            <Movie 
              originalTitle={item.original_title}
              title={item.title}
              overview={item.overview}    
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          )
        })
      }
    </div>
  );
}

export default App;
