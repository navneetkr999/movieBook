import React, { useState } from 'react';
import MovieCard from './moviecard';

const MoviesCard = ({ movies, watchlist, toggleWatchList }) => {

    const [searchText, setSearchText] = useState('');
    const [genre, setGenre] = useState('All Genres');
    const [rating, setRating] = useState('All');

    const onSearchChange = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }

    const onGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const onRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchGenre = (movie, genre) => {
        return genre === 'All Genres' || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchRating = (movie, rating) => {
        switch (rating) {
            case 'All':
                return true;
            case 'Good':
                return movie.rating >= 8
            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8
            case 'Bad':
                return movie.rating < 5
            default:
                return false;
        }
    }

    const matchSearchText = (movie, searchText) => {
        return movie.title.toLowerCase().includes(searchText)
    }

    const filteredMovies = movies.filter((movie) =>
        matchGenre(movie, genre) && matchRating(movie, rating) && matchSearchText(movie, searchText)
    );

    return (
        <>
            <input className='search-input' type="text" placeholder='Search for a Movie...' onChange={onSearchChange} value={searchText} />

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={onGenreChange} name="" id="">
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={onRatingChange} name="" id="">
                        <option>All</option>
                        <option>Good</option>
                        <option>Bad</option>
                        <option>Ok</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard key={movie.id}
                            movie={movie}
                            toggleWatchList={toggleWatchList}
                            isWatchlisted={watchlist.includes(movie.id)}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MoviesCard;
