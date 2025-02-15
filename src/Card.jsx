import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

function Card({name="Unknown", status="Unknown", created="Unknown", url}) {
    let cardStatusClass;
    if (status == "alive") {
        cardStatusClass = "card_status__alive"
    } else if (status == "dead") {
        cardStatusClass = "card_status__dead"
    } else {
        cardStatusClass = "card_status__unknown"
    }

    return (
    <>
    <div className="card" onClick={() => {
        window.open(url, '_blank')
    }}>
        <div className="card_name-container">
            <h1 className="card_name">
                {name}
            </h1>
        </div>
        <div className="card_bottom-container">
            <div className="card_status-container">
                Status: <span className={`card_status ${cardStatusClass}`}>{status}</span>
            </div>
            <div className="card_created-container">
                Created: {created}
            </div>
        </div>
    </div>
    </>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.string
};

export default Card;