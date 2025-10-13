

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'

import { MainProvider } from './context-provider/ContextProvider.jsx'

import { useState } from 'react'


export default function App() {

  const [boards, setBoards] = useState([])
  const [currentBoard, setCurrentBoard] = useState()
  const [theme, setTheme] = useState('darkTheme')

  return (
    <MainProvider
      value={{
        boards,
        setBoards,
        currentBoard,
        setCurrentBoard,
        theme,
        setTheme
      }}>
      <div className={`app ${theme}`}>
        <Header />
        <Main />
      </div>
    </MainProvider>

  )
}