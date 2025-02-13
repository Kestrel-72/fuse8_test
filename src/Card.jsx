import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

function Card({name="Unknown", status="Unknown", created="Unknown"}) {
    return (
    <>
    <div className="card">
        <div className="card_name-container">
            <h1 className="card_name">
                {name}
            </h1>
        </div>
        <div className="card_bottom-container">
            <div className="card_status">
                {status}
            </div>
            <div className="card_created">
                {created}
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