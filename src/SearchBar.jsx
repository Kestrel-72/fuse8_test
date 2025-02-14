import React from 'react';
import { useState } from 'react';

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

export default SearchBar;