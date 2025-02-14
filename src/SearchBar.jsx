import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar() {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
    <>
        <input className="searchbar" placeholder="Search characters..." onChange={handleChange}></input>
    </>
    )
}

SearchBar.propTypes = {
    search: PropTypes.string,
};

export default SearchBar;