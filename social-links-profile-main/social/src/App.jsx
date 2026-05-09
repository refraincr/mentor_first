import './App.css'
import Card from "@/components/Card"
import { info } from "@/data/data"

function App() {

  return (
    <>
      {info.map((i,idx)=>
        <Card key={idx} content={i} />
      )}
    </>
  )
}

export default App
