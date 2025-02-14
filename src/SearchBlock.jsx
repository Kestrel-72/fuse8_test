import PropTypes from 'prop-types';

import SearchBar from "./SearchBar.jsx";

function SearchBlock( {foundCharacters} ) {
    return (
        <>
            <SearchBar />
            <div>{foundCharacters > 0 ? "Found characters: " + foundCharacters : ""}</div>
        </>
    )
}

SearchBlock.propTypes = {
    foundCharacters: PropTypes.number,
};

export default SearchBlock;