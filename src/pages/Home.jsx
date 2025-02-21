import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleNavigation = ()=>{
        navigate("/quiz")
    }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center '>
        <h1 className='text-4xl font-sans text-DarkBlue-400 font-bold mb-4'>Test Your Knowledge</h1>
        <p className='text-lg mb-6'>Challenge yourself with our interactive quizzes to test your knowledge.</p>
        <button onClick={handleNavigation} className='px-6 py-2 bg-DarkBlue text-white font-semibold rounded-md'>Start Quiz Now</button>
    </div>
  )
}

export default Home
