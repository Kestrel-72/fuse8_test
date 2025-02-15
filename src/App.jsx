import { useState } from 'react';
import './App.css'
import SearchBlock from './SearchBlock.jsx'
import CardsField from './CardsField.jsx'

function App() {
  const [apiResult, setApiResult] = useState(null);

  return (
    <>
      <SearchBlock apiResult={apiResult} setApiResult={setApiResult}/>
      <CardsField apiResult={apiResult} setApiResult={setApiResult}/>
    </>
  )
}

export default App
