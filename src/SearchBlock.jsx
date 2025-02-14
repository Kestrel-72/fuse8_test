import { useState } from 'react';
import SearchBar from "./SearchBar.jsx";

function SearchBlock( {apiResult, setApiResult} ) {
    const [input, setInput] = useState("");
    let charactersCount = "";
    if (input.length > 3 && apiResult == null) {
        charactersCount = "Found characters: 0";
    } else if (apiResult != null) {
        charactersCount = "Found characters: " + apiResult.info.count;
    }

    return (
        <>
            <SearchBar setInput={setInput} setApiResult={setApiResult}/>
            <div className="charactersCount">{charactersCount}</div>
        </>
    )
}

export default SearchBlock;