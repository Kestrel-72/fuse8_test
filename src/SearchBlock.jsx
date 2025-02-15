import { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import PageButtons from './PageButtons.jsx';
import "./SearchBlock.css";

function SearchBlock( {apiResult, setApiResult, currentPage, setCurrentPage} ) {
    const [input, setInput] = useState("");
    let charactersCount = "";
    if (input.length > 3 && apiResult == null) {
        charactersCount = "Found characters: 0";
    } else if (apiResult != null) {
        charactersCount = "Found characters: " + apiResult.info.count;
    }

    return (
        <div className="searchBlock">
            <SearchBar setInput={setInput} setApiResult={setApiResult} setCurrentPage={setCurrentPage}/>
            <div className="charactersCount">{charactersCount}</div>
            <PageButtons apiResult={apiResult} setApiResult={setApiResult} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default SearchBlock;