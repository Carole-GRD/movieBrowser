import { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const options = { method: 'GET', headers: { accept: 'application/json' } };
const URL = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent('Sherlock')}&api_key=${API_KEY}`;

import movieByKeyword from '../../api/moviebykeyword.api';
import movieByGenre from '../../api/moviebygenre.api';

import Title from '../../components/home/title/title.component'
import MainNavBar from '../../components/home/mainNavBar/mainNavBar.component'
import SearchBar from '../../components/discover/searchBar/searchBar'
import GenreNavBar from '../../components/discover/genreNavBar/genreNavBar';
import Movies from '../../components/discover/movies/movies';


function DiscoverPage() {

    const [movieFind, setMovieFind] = useState(null);
    const [isSearchByGenre, setIsSearchByGenre] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const sherlock = await axios.get(URL, options);
                setMovieFind(sherlock.data.results);

            } catch (error) {
                console.error('Erreur lors de la récupération du film Sherlock :', error.message);
            }
        };
        fetchData();
    }, []);

    function searchByKeyword(keyword) {
        const fetchData = async () => {
            try {
                const moviesByKeyword = await movieByKeyword(keyword);
                setMovieFind(moviesByKeyword.results);
                setIsSearchByGenre(false);
            } catch (error) {
                console.error('Erreur lors de la récupération du film :', error.message);
            }
        };
        fetchData();
    }

    function searchByGenre(genreName) {
        const fetchData = async () => {
            try {
                const movieData = await movieByGenre(genreName);
                console.log(movieData);
                setMovieFind(movieData.results);
                setIsSearchByGenre(true);
            } catch (error) {
                console.error('Erreur lors de la récupération des films par genre :', error.message);
            }
        };
        fetchData();
    }

    console.log(movieFind);

    return (
        <div className='discover-page'>
            <Title />
            <SearchBar  
                onSearchByKeyword={searchByKeyword}
                isSearchByGenre={isSearchByGenre} 
            />
            <GenreNavBar onSearchByGenre={searchByGenre} />
            {movieFind && (
                <Movies movies={movieFind} />
            )}
            <MainNavBar />
        </div>
    )
}

export default DiscoverPage