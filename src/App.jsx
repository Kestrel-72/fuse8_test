import { useState } from 'react';
import './App.css'
import SearchBlock from './SearchBlock.jsx'
import CardsList from './CardsList.jsx';

function App() {
  const [apiResult, setApiResult] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <div className="searchBlock-container">
        <SearchBlock apiResult={apiResult} setApiResult={setApiResult} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
      
      <CardsList apiResult={apiResult}/>
    </>
  )
}

export default App
