import { useState } from 'react'
import './theme/variable.css'
import {LandingPage} from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
