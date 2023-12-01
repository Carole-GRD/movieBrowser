import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const options = { method: 'GET', headers: { accept: 'application/json' } };

async function movieByGenre(genreId) {
    
    const URL = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`;

    try {
        const response = await axios.get(URL, options);
        return response.data;
    }
    catch (error) {
        console.error('Erreur lors de la récupération du film :', error.message);
    }

}

export default movieByGenre
