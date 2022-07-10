import './searchBar.css'

function SearchBar({searchTerm, setSearchTerm, search}) {
    return (
        <div>
            <input type="text" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
            <button onClick={search}>search</button>
        </div>    
    )
}

export default SearchBar