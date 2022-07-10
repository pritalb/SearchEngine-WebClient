import './results.css'
import Result from './result.js'

function SearchResults({results}) {
    const ranks = Object.keys(results).sort((a, b) => a - b)
    const resultRanks = ranks.reverse()
    console.log(resultRanks)

    return (
        <div>
            {
                resultRanks.map((rank) => (
                    <Result result={results[rank]} />
                ))
            }
        </div>
    )
}

export default SearchResults;