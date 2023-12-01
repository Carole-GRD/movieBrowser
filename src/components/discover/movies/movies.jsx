
function Movies( {movies} ) {
    return (
        <div className="discover-movies">
            {movies.map(movie => (
                <div className="discover-movie-item" key={movie.id}>
                    {movie.backdrop_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Image du film ${movie.title}`} />
                    ) : (
                        <p>Pas d'image disponible</p>
                    )}
                    <h3 key={movie.id}>
                        {movie.title} {movie.release_date && (
                            <span>({new Date(movie.release_date).getFullYear()})</span>
                        )}
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default Movies
