import './result.css'

function Result({result}) {
    console.log(`single result: ${result}`)
    // console.log(result)
    return (
        <div className="result-container">
            <a href={result.url}>
                <div class='result-content'>
                    <div class='result-title'> {result.title} </div>
                    <div class='result-url'> {result.url} </div>

                    <div class='ranking-score-info'>
                        <div class='ranking-score-info-backlinks'>
                            backlinks: {result.backlinks}
                        </div>
                        <div class='ranking-score-info-keyword-count'>
                            Keywords Presents: {result.keywords_present}
                        </div>
                        <div class='ranking-score-info-total-score'>
                            Total ranking score: {result.ranking_score}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Result