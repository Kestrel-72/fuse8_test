import "./PageButtons.css";

function PageButtons({ apiResult, setApiResult, currentPage, setCurrentPage}) {
    let buttons = [];
    if (apiResult != null) {
        buttons.push(
            <input
                className="pageButton"
                type="button"
                value={"Previous page"}
                disabled={apiResult.info.prev && currentPage > 1 ? false : true}
                key={"prev"}
                onClick={() => {
                    fetchPreviousPage();
                }}
            ></input>
        );
        buttons.push(
            <input
                className="pageButton"
                type="button"
                value={"Next page"} 
                disabled={apiResult.info.next && currentPage < apiResult.info.pages ? false : true}
                key={"next"}
                onClick={() => {
                    fetchNextPage();
                }}
            ></input>
        );
    }

    function fetchNextPage() {
        fetch(apiResult.info.next)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                return response.json();
            })
            .then(data => {
                setApiResult(data);
                setCurrentPage(currentPage + 1);
                console.log(data);
            })
            .catch(error => {
                setApiResult(null);
                console.error(error);
            });
    }

    function fetchPreviousPage() {
        fetch(apiResult.info.prev)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                return response.json();
            })
            .then(data => {
                setApiResult(data);
                setCurrentPage(currentPage - 1);
                console.log(data);
            })
            .catch(error => {
                setApiResult(null);
                console.error(error);
            });
    }

    return (
        <div className="pageButtons">{buttons}</div>
    )
}

export default PageButtons;