
function DateGenreComponent( {date, genres}) {
    return (
        <div className="detail-date-genre">
            <div>
                <h3>Release date</h3>
                {/* TODO : formater la date */}
                <p>{date}</p>
            </div>
            <div>
                <h3>Genre</h3>
                <div className="genre">
                    {genres.map(genre => (
                        <p key={genre.name}>
                            {
                                genre.name === 'Science Fiction' ?
                                'Sci-Fi' :
                                genre.name
                            }
                        </p>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default DateGenreComponent
