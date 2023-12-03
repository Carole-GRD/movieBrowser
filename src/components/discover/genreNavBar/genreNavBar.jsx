import { useEffect, useState } from "react";
import fetchGenres from "../../../api/genre.api";
import Arrow from '../../../assets/icons/arrow.png';

function GenreNavBar( { onSearchByGenre } ) {

    const [allGenres, setAllGenres] = useState(null);    

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetchGenres();
                console.log(data.genres);
                setAllGenres(data.genres);
            } catch (error) {
                console.error('Erreur lors de la récupération des genres :', error.message);
            }
        };

        fetchData();
        
    }, [])

    function searchByGenre(genreId) {
        console.log('searchByGenre avec l\'id : ', genreId);
        onSearchByGenre(genreId);
    }

    
    return (
        <div className="genre-navbar-container">
            <button className="arrow-icon">
                <img src={Arrow} alt="Déflier vers la gauche" />
            </button>
            <div className="genre-navbar">
                {allGenres && (
                    allGenres.map (genre => (
                        <button 
                            className="genre-name" 
                            key={genre.id} 
                            onClick={() => searchByGenre(genre.id)}
                        >
                            {genre.name}
                        </button>
                    ))
                )}
            </div>
            <button className="arrow-icon">
                <img src={Arrow} alt="Déflier vers la droite" />
            </button>
        </div>
    )
}

export default GenreNavBar
