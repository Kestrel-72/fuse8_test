import { useState } from 'react';
import './App.css'
import SearchBlock from './SearchBlock.jsx'
import CardsField from './CardsField.jsx'
import PageButtons from './PageButtons.jsx';

function App() {
  const [apiResult, setApiResult] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <>
      <SearchBlock apiResult={apiResult} setApiResult={setApiResult} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <CardsField apiResult={apiResult} setApiResult={setApiResult}/>
    </>
  )
}

export default App
