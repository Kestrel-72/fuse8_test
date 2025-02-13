import React from 'react';
import PropTypes from 'prop-types';

function Card(card) {
    return (
    <>
    <div class="card">
        <div className="card_name-container">
            <h1 class="card_name">
                {card.name}
            </h1>
        </div>
        <div className="card_bottom-container">
            <div className="card_status">
                {card.status}
            </div>
            <div className="card_created">
                {card.created}
            </div>
        </div>
    </div>;
    </>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.string
};

Card.defaultProps = {
    name: "Unknown",
    status: "Unknown",
    created: "Unknown"
  };

export default Card;