

import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import DeleteBoardModal from './components/modals/delete-board-modal/DeleteBoardModal.jsx'
import { boardTemplate, stickerTemplate } from './templates/Templates.jsx'
import { MainProvider } from './context-provider/ContextProvider.jsx'
import { useState, useRef } from 'react'


export default function App() {

  const id = crypto.randomUUID()

  const [boards, setBoards] = useState([{ ...boardTemplate, boardId: id }])
  const [theme, setTheme] = useState('darkTheme')
  const [currentBoardId, setCurrentBoardId] = useState(id)
  const [isDeleteBoardModalOpen, setIsDeleteBoardModalOpen] = useState(false)
  const [clickedElementOnApp, setClickedElementOnApp] = useState(null) 

  const boardRef = useRef()
  const appRef = useRef()


  function handleClick(e) {
    setClickedElementOnApp(e.target)
  }


  return (
    <MainProvider
      value={{
        boards, setBoards,
        theme, setTheme,
        currentBoardId, setCurrentBoardId,
        isDeleteBoardModalOpen, setIsDeleteBoardModalOpen,
        boardTemplate,
        stickerTemplate,
        boardRef,
        clickedElementOnApp
      }}>
      <div className={`app ${theme}`} ref={appRef} onClick={handleClick}>
        <Header />
        <Main />
        {isDeleteBoardModalOpen
          && <DeleteBoardModal />}
      </div>
    </MainProvider>

  )
}