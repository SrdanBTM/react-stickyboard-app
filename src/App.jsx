

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'

import { MainProvider } from './context-provider/ContextProvider.jsx'

import { useState } from 'react'


export default function App() {

  const boardTemplate = {
    boardName: 'My Board',
    isInput: false,
    isFocused: false,
    stickers: []
  }

  const stickerTemplate = {
    heading: '',
    content: '',
    color: '',
    boardName: '',
    positionX: '',
    positionY: ''
  }


  const [boards, setBoards] = useState([boardTemplate])
  const [currentBoard, setCurrentBoard] = useState(boards[0])
  const [theme, setTheme] = useState('darkTheme')


  return (
    <MainProvider
      value={{
        boards,
        setBoards,
        currentBoard,
        setCurrentBoard,
        theme,
        setTheme,
        boardTemplate,
        stickerTemplate
      }}>
      <div className={`app ${theme}`}>
        <Header />
        <Main />
      </div>
    </MainProvider>

  )
}