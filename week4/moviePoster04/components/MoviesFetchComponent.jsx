// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieComponent from '../components/MovieComponent';
import MovieDetailComponent from '../components/MovieDetailComponent';
import SpinnerComponent from './SpinnerComponent';

// eslint-disable-next-line react/prop-types
function MoviesFetchComponent({address}) {
    const [movieData, setMovieData] = useState([]);
    const [spinner, setSpinner] = useState(false);

    // fetch
    useEffect(() => {
        const fetchData = async () => {
        try {
            setSpinner(true);
            const response = await fetch(address, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODkzY2Q0YmQ3NWQyZDk5ZmZhNTEwMGMzYTJmNGMwYyIsIm5iZiI6MTcxOTIyNDg5NC41NTU3NjIsInN1YiI6IjY2NDBmMzBhNDBhNDM3MDQ0OTU1NTMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAfmpdzfSWU'
                
            }
            });
            if (!response.ok) {
            throw new Error('Error : Not OK :(');
            }
            const data = await response.json();
            const movies = data.results;
            console.log('Number of movies:', movies.length); // 영화 개수 출력

            const newMovieData = movies.map(movie => ({
            id: movie.id,
            movieComponent: (
                <MovieComponent
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                voteAverage={movie.vote_average}
                />
            ),
            movieDetailComponent: (
                <MovieDetailComponent
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                originalTitle={movie.original_title}
                />
            )
            }));
            setMovieData(newMovieData);
            setSpinner(false);
        } catch (error) {
            console.error('Error:', error);
        }
        };
        fetchData();
    }, []);

    return(
        spinner 
            ? <SpinnerComponent/>
            : <MovieContainer>
            {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
                <MovieItem key={id} className="movieContainer__movieItem">
                {movieComponent}
                <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
                    {movieDetailComponent}
                </MovieDetailWrapper>
                </MovieItem>
            ))}
        </MovieContainer>    
    );
}

const MovieContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 20px;
    padding-left: 40px;
    gap: 10px;
    overflow-y: scroll;
    min-height: 100vh;
    margin: 0px;
`;

const MovieItem = styled.div`
    flex-basis: calc(12% - 5px);
    display: flex;
    height: 332px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;

    &:hover .movieContainer__movieItem__movieDetailWrapper {
        display: flex;
    }
`;

const MovieDetailWrapper = styled.div`
    display: none;
`;

export default MoviesFetchComponent;