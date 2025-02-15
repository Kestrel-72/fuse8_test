import CardsList from "./CardsList.jsx";

function CardsField( { apiResult } ) {
    let buttons = [];

    if (apiResult != null && apiResult.info.pages > 1) {
        for (let i = 1; i <= apiResult.info.pages; i++) {
            buttons.push(<input type="button" key={i} value={i}></input>);
        }
    }

    return (
        <>
            <div className="cardsField">
                <CardsList apiResult={apiResult}/>
            </div>
            <ul>{buttons}</ul>
        </>
    )
}

export default CardsField;