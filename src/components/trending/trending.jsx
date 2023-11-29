

function Trending( { allMovies } ) {
    return (
        <div className="trending">
            <h3>Trending</h3>
            {allMovies && (
                <div>
                    {
                        allMovies.data.results.map(movie => {
                            return (
                                <div key={movie.id}>
                                    <p>
                                        {movie.original_title + ' - ' + movie.release_date}
                                    </p>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={"Image du film " + movie.title} />
                                </div>
                            )
                        })
                    }
                </div>
                
            )}
        </div>
    )
}

export default Trending