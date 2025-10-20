

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState } from 'react'


export default function App() {

  const [boards, setBoards] = useState([boardTemplate])
  const [currentBoard, setCurrentBoard] = useState(boards[0])
  const [theme, setTheme] = useState('darkTheme')
  const [currentName, setCurrentName] = useState()


  return (
    <MainProvider
      value={{
        boards, setBoards,
        currentBoard, setCurrentBoard,
        theme, setTheme,
        currentName, setCurrentName,
        
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