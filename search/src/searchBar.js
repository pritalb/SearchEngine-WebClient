import './searchBar.css'
import SearchIcon from './search.svg'

function SearchBar({searchTerm, setSearchTerm, search}) {
    return (
        <div class='searchbar'>
            <input type="text" class='search-input-field' value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
            <img class='search-button' alt='search' src={SearchIcon} onClick={search} />
        </div>    
    )
}

export default SearchBar