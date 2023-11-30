import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchAllMovies from '../../api/movie.api';
import ImageComponent from '../../components/detail/image/image.component';


function DetailPage() {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetch = await fetchAllMovies();
                if (id && fetch) {
                    const allMoviesData = fetch.allMoviesData;
                    const movieData = allMoviesData.find(movie => movie.id == id);
                    setMovie(movieData);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des films :', error.message);
            }
        };

        fetchData();

    }, [])



    return (
        <section>
            
            {movie && (
                <>
                    <ImageComponent image={movie.backdrop_path} title={movie.title} />
                    <h3>{movie.title}</h3>
                </>
            )}
        </section>
    )
}

export default DetailPage
