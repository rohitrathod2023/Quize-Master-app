import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { LuLogOut } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import QuizHistory from './QuizHistory'; 

const Navbar = () => {

  return (
    <div className='fixed top-0 left-0 right-0 m-3 flex flex-row justify-around z-50 bg-white shadow-md p-3 rounded-lg'>
      <div className='flex flex-row gap-3 items-center justify-center'>
        <img src={logo} alt="logo" className='w-8 h-8' />
        <Link to="/" className='text-lg font-sans'>QuizMaster</Link>
      </div>
      <Link to="/quiz" className="hover:underline">Quiz</Link>
      <Link to="/history" className="hover:underline">Quiz History</Link>
    </div>
  );
};

export default Navbar;
