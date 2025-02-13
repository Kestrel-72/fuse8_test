import './App.css'
import SearchBar from './SearchBar.jsx'
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
    <SearchBar />
    <Card name={testCard.name} status={testCard.status} created= {testCard.created}/>
    </>
  )
}

export default App
