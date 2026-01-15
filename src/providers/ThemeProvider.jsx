

import { ThemeContext } from '../contexts/ThemeContext.jsx'
import { useState, useEffect } from 'react'

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(()=>{
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ?? 'darkTheme'
  })


  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}