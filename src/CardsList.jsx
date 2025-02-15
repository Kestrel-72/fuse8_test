import Card from './Card.jsx'
import "./CardsList.css";

function CardsList( {apiResult} ) {
    let cardsList = null;
    if (apiResult == null) {
        return;
    } else {
        cardsList = apiResult.results.map(result => 
            <Card name={result.name} status={result.status} created={result.created} url={result.url} key={result.id}/>
        )
        return (
            <div className="cardsList">{cardsList}</div>
        )
    }
}

export default CardsList;