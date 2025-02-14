import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(search="") {
    return (
    <>
        <input className="searchbar" placeholder="Search characters..."></input>
    </>
    )
}

SearchBar.propTypes = {
    search: PropTypes.string,
};

export default SearchBar;