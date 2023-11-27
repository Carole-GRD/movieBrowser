const API_KEY = import.meta.env.VITE_API_KEY;
const options = { method: 'GET', headers: { accept: 'application/json' } };
// const API_AUTHORIZATION = import.meta.env.VITE_API_AUTHORIZATION;
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_AUTHORIZATION}`
//   }
// };
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

export async function fetchAllMovies() {

    try {
        const respone = fetch(URL, options);

        const allMovies = response.json();


        return allMovies;
        // fetch(URL, options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    }
    catch (error) {
        console.error('Erreur lors de la récupération des films :', error.message);
    }

}
