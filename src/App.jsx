import { useState } from 'react';
import './App.css'
import SearchBlock from './SearchBlock.jsx'
import CardsList from './CardsList.jsx'

function App() {
  const [apiResult, setApiResult] = useState(null);

  return (
    <>
      <SearchBlock apiResult={apiResult} setApiResult={setApiResult}/>
      <CardsList apiResult={apiResult}/>
    </>
  )
}

export default App
