import React from 'react';
import './movieCard.css'
import Rate from './rate'

const MovieCard = ({ movie }) => { 
  return (
    <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
      <a  className="navigate" href="/">
        <div className="main">

          <div className="top-card-part" style={{backgroundImage : "url("+movie.image+")"}}>
            <Rate style={{backgroundColor : 'red'}} className="test" nbrofrate={movie.rate}/>

          </div>

          <div className="bottom-card-part">
            <span>{movie.title}</span>
            <span> - </span>
            <span>{movie.date}</span>
          </div>

        </div>
      </a>
    </div>


  )
}

export default MovieCard;