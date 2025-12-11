

import { ThemeContext } from '../contexts/ThemeContext.jsx'
import { useState } from 'react'

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('darkTheme')


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}