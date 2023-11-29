import Play from '../../assets/icons/play.svg'

function LastReleaseComponent( { lastRelease } ) {

    return (
        <> 
            {lastRelease && (
                <div className="last-release">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${lastRelease.backdrop_path}`} 
                        alt={`Image du film ${lastRelease.title}`} 
                    />
                    <div className='player'>
                        <img src={Play} alt="Lecture" />
                        <div>
                            <p>Movie Spotlight</p>
                            <p>Ready Player one</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default LastReleaseComponent
