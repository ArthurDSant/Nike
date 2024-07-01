import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
import React from 'react'

const Theme = () => {
  const toggleTheme = () => {
    window.document.documentElement.classList.toggle('dark');
  }

  return (
    <div>
    <div className='fixed bottom-6 right-6'>
      <button  
        onClick={toggleTheme}
        className='theme'>
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden"/>
      </button>
    </div>
    </div>
  )
}

export default Theme
