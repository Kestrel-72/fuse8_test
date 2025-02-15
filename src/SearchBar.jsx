import React from 'react';
import './SearchBar.css'

function SearchBar({setInput, setApiResult, setCurrentPage}) {
    function handleChange(e) {
        setInput(e.target.value);
        if (e.target.value.length > 3) {
            sendQuery(e.target.value);
        } else {
            setApiResult(null);
        }
    }

    function sendQuery(character) {
        const apiUrl = "https://rickandmortyapi.com/api/character/?name=";

        fetch(apiUrl + character)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                return response.json();
            })
            .then(data => {
                setApiResult(data);
                setCurrentPage(1);
                console.log(data);
            })
            .catch(error => {
                setApiResult(null);
                console.error(error);
            });
    }

    return (
    <>
        <input className="searchBar" placeholder="Search characters..." autoFocus onChange={handleChange}></input>
    </>
    )
}

export default SearchBar;