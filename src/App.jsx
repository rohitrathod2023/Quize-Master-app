import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Navbar from './components/Navbar'
import QuizHistory from './components/QuizHistory'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='quiz' element = {<Quiz/>}></Route>
        <Route path='history' element= {<QuizHistory/>}></Route>
    </Routes>
    </>
  )
}

export default App
