import './result.css'

function Result({result}) {
    console.log(`single result: ${result}`)
    // console.log(result)
    return (
        <div>
            <a href={result.url}>{result.title}</a>
        </div>
    )
}

export default Result