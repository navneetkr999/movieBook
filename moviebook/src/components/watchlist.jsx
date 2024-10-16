import React from 'react'
import MovieCard from './moviecard';

const Watchlist = ({ movies, watchlist, toggleWatchList }) => {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map(id => {
                        const movie = movies.find(movie => movie.id === id);
                        return <MovieCard key={id}
                            movie={movie}
                            toggleWatchList={toggleWatchList}
                            isWatchlisted={true}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Watchlist;
