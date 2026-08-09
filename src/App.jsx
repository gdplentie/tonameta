import { useState } from 'react'
import './style/global.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Apertou {count} vezes</p>
    <button onClick={()=>setCount(count+1)}>Me aperte</button>
    </>
  )
}

export default App
