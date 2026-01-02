import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './theme/variable.css'
import {LandingPage} from './pages/Landing'
import { AboutPage } from "./pages/AboutUs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      < Route path="/" element={<LandingPage/>}/>
      < Route path="about" element={<AboutPage/>}/>
    </Routes>
  )
}

export default App
