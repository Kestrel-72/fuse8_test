import Card from './Card.jsx'

function CardsList( {apiResult} ) {
    let cardsList = null;
    if (apiResult == null) {
        return;
    } else {
        cardsList = apiResult.results.map(result => 
            <Card name={result.name} status={result.status} created={result.created} key={result.id}/>
        )
        return (
            <ul>{cardsList}</ul>
        )
    }
}

export default CardsList;