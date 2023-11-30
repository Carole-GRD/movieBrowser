

function Trending( { allMovies } ) {
    return (
        <div className="trending">
            <h3>Trending</h3>
            {allMovies && (
                <div className="grid-container">
                    {
                        allMovies.map(movie => {
                            return (
                                <div key={movie.id} className="grid-item">
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                                        alt={"Image du film " + movie.title} 
                                    />
                                    <p>{movie.title}</p>
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