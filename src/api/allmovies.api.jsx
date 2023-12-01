import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;
const options = { method: 'GET', headers: { accept: 'application/json' } };
// const API_AUTHORIZATION = import.meta.env.VITE_API_AUTHORIZATION;
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${API_AUTHORIZATION}`
//     }
// };
const URL = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY;


async function fetchAllMovies() {

    try {
        const response = await axios.get(URL, options);

        const allMoviesData = response.data.results.map(movie => movie);

        const lastReleaseData = allMoviesData.reduce((latestMovie, currentMovie) => {
            const latestReleaseDate = new Date(latestMovie.release_date);
            const currentReleaseDate = new Date(currentMovie.release_date);
            return latestReleaseDate > currentReleaseDate ? latestMovie : currentMovie;
        }, allMoviesData[0]);

        return {allMoviesData, lastReleaseData};
    }
    catch (error) {
        console.error('Erreur lors de la récupération des films :', error.message);
    }

}
// async function fetchAllMovies() {

//     try {
//         const response = await axios.get(URL, options);
//         return response;
//     }
//     catch (error) {
//         console.error('Erreur lors de la récupération des films :', error.message);
//     }

// }

export default fetchAllMovies
