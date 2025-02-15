import Card from './Card.jsx'

function CardsList( {apiResult} ) {
    let cardsList = null;
    if (apiResult == null) {
        return;
    } else {
        cardsList = apiResult.results.map(result => 
            <Card name={result.name} status={result.status} created={result.created} url={result.url} key={result.id}/>
        )
        return (
            <>{cardsList}</>
        )
    }
}

export default CardsList;