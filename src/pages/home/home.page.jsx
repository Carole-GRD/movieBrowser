import { useEffect, useState } from 'react'


import Title from '../../components/title/title.component'
import MainNavBar from '../../components/mainNavBar/mainNavBar.component'
import fetchAllMovies from '../../api/movie.api';
import LastReleaseComponent from '../../components/lastRelease/lastRelease.component';
import Trending from '../../components/trending/trending';


export default function HomePage() {

    const [allMovies, setAllMovies] = useState(null);
    const [lastRelease, setLastRelease] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesData = await fetchAllMovies();
                
                setAllMovies(moviesData);
                console.log('home.page - useEffect : ', moviesData);

                const lastReleaseData = moviesData.data.results.reduce((latestMovie, currentMovie) => {
                    const latestReleaseDate = new Date(latestMovie.release_date);
                    const currentReleaseDate = new Date(currentMovie.release_date);
                    return latestReleaseDate > currentReleaseDate ? latestMovie : currentMovie;
                }, moviesData.data.results[0]);
                setLastRelease(lastReleaseData);
                console.log('Movie with the latest release date:', lastReleaseData);

            } catch (error) {
                console.error('Erreur lors de la récupération des films :', error.message);
            }
        };

        fetchData();
    }, []);

    console.log('home.page ', allMovies);

    return (
        <>
            <Title />
            <LastReleaseComponent lastRelease={lastRelease} />
            {/* <Trending allMovies={allMovies} /> */}
            <MainNavBar />
        </>
    )
}
