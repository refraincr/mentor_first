import './App.css'
import Card from "./components/Card"
import { info } from "./data/data"

function App() {

  return (
    <>
      {info.map(i=>
        <Card key={i.id} info={i} />
      )}
    </>
  )
}

export default App
