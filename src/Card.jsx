import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

function Card({name="Unknown", status="Unknown", created="Unknown", species, url}) {
    let cardStatusClass;
    if (status == "Alive") {
        cardStatusClass = "card_status__alive"
    } else if (status == "Dead") {
        cardStatusClass = "card_status__dead"
    } else {
        cardStatusClass = "card_status__unknown"
    }

    let date = new Date(created);
    date = new Intl.DateTimeFormat("ru-RU", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(date);

    return (
    <>
    <div className="card" onClick={() => {
        window.open(url, '_blank')
    }}>
        <div className="card_name-container">
            <h1 className="card_name">
                {name} - {species}
            </h1>
        </div>
        <div className="card_bottom-container">
            <div className="card_status-container">
                Status: <span className={`card_status ${cardStatusClass}`}>{status}</span>
            </div>
            <div className="card_created-container">
                Created: {date}
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