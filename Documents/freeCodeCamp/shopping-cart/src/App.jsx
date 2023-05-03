import { useState } from 'react'
import Home from './components/Home/Home'
import Main from './components/Home/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-main-background ">
      <Home></Home>
    </div>
  )
}

export default App
