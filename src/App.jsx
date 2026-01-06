import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './theme/variable.css'
import {LandingPage} from './pages/Landing'
import { AboutPage } from "./pages/AboutUs";
import {CoursesDetails} from './pages/CoursesDetails'
import {CourseStyle1} from './pages/CourseStyle1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      < Route path="/" element={<LandingPage/>}/>
      < Route path="about" element={<AboutPage/>}/>
      < Route path="details" element={<CoursesDetails/>}/>
      <Route path="style1" element={<CourseStyle1/>}/>
    </Routes>
  )
}

export default App
