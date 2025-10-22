

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import DeleteBoardModal from './components/modals/delete-board-modal/DeleteBoardModal.jsx'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState } from 'react'


export default function App() {

  const id = crypto.randomUUID()

  const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [theme, setTheme] = useState('darkTheme')
  const [currentBoardId, setCurrentBoardId] = useState(id)


  return (
    <MainProvider
      value={{
        boards, setBoards,
        theme, setTheme,
        currentBoardId, setCurrentBoardId,

        boardTemplate,
        stickerTemplate
      }}>
      <div className={`app ${theme}`}>
        <Header />
        <Main />
        <DeleteBoardModal />
      </div>
    </MainProvider>

  )
}