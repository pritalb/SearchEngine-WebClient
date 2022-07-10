import './home.css'
import {useState} from 'react';

import SearchBar from './searchBar.js'
import SearchResults from './results'

function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState({})

    const search = () => {
        fetch(`http://127.0.0.1:8000/api/search/q=${searchTerm}`).then(response => response.json())
        .then(data => {
            setResults(data)
            // console.log(data)
        })
    }


    return (
        <div>
            <h1>Search</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search}/>
            <SearchResults results={results} />
        </div>
    )
}

export default Home;