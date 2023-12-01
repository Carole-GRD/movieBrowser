import { useState } from 'react'
import SearchIcon from '../../../assets/icons/loupe.png'


function SearchBar( {onSearchMovies} ) {

    const [inputValue, setInputValue] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        onSearchMovies(inputValue);
    }
    return (
        <div className="searchbar">
            <form action="">
                <input 
                    type="text"
                    placeholder="Sherlock Holmes"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <img src={SearchIcon} alt="Chercher" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar