import { useEffect, useState } from 'react'
import SearchIcon from '../../../assets/icons/loupe.png'


function SearchBar( {onSearchByKeyword, isSearchByGenre} ) {

    const [inputValue, setInputValue] = useState('');

    /* 
        Si l'utilisateur fait une recherche par genre, 
        on vide l'input (la barre de recherche)
    */
    useEffect(() => {
        if (isSearchByGenre) {
            setInputValue('');
        }
    }, [isSearchByGenre])

    function handleSearch(e) {
        e.preventDefault();
        onSearchByKeyword(inputValue);
    }
    return (
        <div className="searchbar">
            <form action="">
                <input 
                    type="text"
                    placeholder="Sherlock Holmes"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button onClick={handleSearch}>
                    <img src={SearchIcon} alt="Chercher" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
