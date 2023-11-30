import { useEffect, useState } from 'react'

import fetchAllMovies from '../../api/movie.api';

import Title from '../../components/home/title/title.component'
import MainNavBar from '../../components/home/mainNavBar/mainNavBar.component'
import LastReleaseComponent from '../../components/home/lastRelease/lastRelease.component';
import Trending from '../../components/home/trending/trending';


export default function HomePage() {


    const [allMovies, setAllMovies] = useState(null);
    const [lastRelease, setLastRelease] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetch = await fetchAllMovies();
                console.log('fetch : ', fetch);

                const allMoviesData = fetch.allMoviesData;
                // console.log('All Movies : ', allMoviesData);
                setAllMovies(allMoviesData);

                const lastRealeaseData = fetch.lastReleaseData;
                // console.log('Movie with the latest release date:', lastRealeaseData);
                setLastRelease(lastRealeaseData);

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
            <Trending allMovies={allMovies} />
            <MainNavBar />
        </>
    )
}
