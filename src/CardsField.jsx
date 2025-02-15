import CardsList from "./CardsList.jsx";

function CardsField( { apiResult } ) {
    return (
        <div className="cardsField">
            <CardsList apiResult={apiResult}/>
        </div>
    )
}

export default CardsField;