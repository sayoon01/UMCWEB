import React from 'react';
import '../App';
//import {useState} from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movie({title,overview,originalTitle,poster_path,vote_average}) {
   
    return (
        <div className='movie-container'>
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
            <div className="overview">
            <p id='overViewTitle'>{title}</p>
            <p id='overViewExplain'>{overview}</p>
            </div>
            <div className='movie-info'>
                <h5>{originalTitle}</h5>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}