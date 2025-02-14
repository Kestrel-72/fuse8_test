import SearchBar from "./SearchBar.jsx";

function SearchBlock( {apiResult, setApiResult} ) {
    return (
        <>
            <SearchBar setApiResult={setApiResult}/>
            <div>{apiResult != null ? "Found characters: " + apiResult.info.count : ""}</div>
        </>
    )
}

export default SearchBlock;