import React from 'react'

const MovieCard = ({ movie }) => {

    const handleError = (e) => {
        e.target.src = "images/default.jpg";
    }

    const getRatingCalss = (rating) => {
        if (rating >= 8) return 'rating-good';
        if (rating >= 5 && rating < 8) return 'rating-ok';
        return 'rating-bad';
    }

    return (
        <div className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} /> {/* onError handles the error which is defined the in function */}
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingCalss(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard;