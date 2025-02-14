import React from 'react';
import { useState } from 'react';

function SearchBar({setApiResult}) {
    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
        if (e.target.value.length > 3) {
            sendQuery(e.target.value);
        }
    }

    function sendQuery(character) {
        const apiUrl = "https://rickandmortyapi.com/api/character/?name=";

        fetch(apiUrl + character)
            .then(response => {
                if (!response.ok) {
                    setApiResult(null);
                    throw new Error('Character not found');
                }
                return response.json();
            })
            .then(data => {
                setApiResult(data);
                console.log(data);
            })
            .catch(error => {
                setApiResult(null);
                console.error(error);
            });
    }

    return (
    <>
        <input className="searchbar" placeholder="Search characters..." onChange={handleChange}></input>
    </>
    )
}

export default SearchBar;