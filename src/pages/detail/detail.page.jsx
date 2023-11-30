import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageComponent from '../../components/detail/image/image.component';
import TitleComponent from '../../components/detail/title/title.component';
import fetchOneMovie from '../../api/onemovie.api';


function DetailPage() {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const movie = await fetchOneMovie(id);
                    setMovie(movie);
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
                    <TitleComponent
                        title={movie.title} 
                        runtime={movie.runtime}
                        voteAverage={movie.vote_average}
                    />
                </>
            )}
        </section>
    )
}

export default DetailPage
