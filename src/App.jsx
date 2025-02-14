import './App.css'
import SearchBlock from './SearchBlock.jsx'
import Card from './Card.jsx'

const testCard = {
  name: "Rick",
  status: "Alive",
  created: "13.02.2025",
  id: 1
}

function App() {
  return (
    <>
      <SearchBlock foundCharacters={1}/>
      <Card name={testCard.name} status={testCard.status} created= {testCard.created}/>
    </>
  )
}

export default App
