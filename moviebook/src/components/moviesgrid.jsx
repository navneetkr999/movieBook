import React, { useEffect, useState } from 'react'

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const m = [1, 2, 3];
        setMovies(m);
    }, []);

    return (
        <div>
            {movies}
        </div>
    )
}

export default MoviesGrid;
