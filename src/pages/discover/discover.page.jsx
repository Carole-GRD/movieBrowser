
import Title from '../../components/home/title/title.component'
import MainNavBar from '../../components/home/mainNavBar/mainNavBar.component'
import SearchBar from '../../components/discover/searchBar/searchBar'
import { useState } from 'react';
import movieByKeyword from '../../api/moviebykeyword.api';
import GenreNavBar from '../../components/discover/genreNavBar/genreNavBar';
import Movies from '../../components/discover/movies/movies';


function DiscoverPage() {

    const [movieFind, setMovieFind] = useState(null);

    function searchMovies(keyword) {
        const fetchData = async () => {
            try {
                const moviesByKeyword = await movieByKeyword(keyword);
                setMovieFind(moviesByKeyword.results);
            } catch (error) {
                console.error('Erreur lors de la récupération du film :', error.message);
            }
        };

        fetchData();
    }

    console.log(movieFind);

    return (
        <div>
            <Title />
            <SearchBar onSearchMovies={searchMovies} />
            <GenreNavBar />
            {movieFind && (
                <Movies movies={movieFind} />
            )}
            <MainNavBar />
        </div>
    )
}

export default DiscoverPage